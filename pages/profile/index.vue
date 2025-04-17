<!-- <template>
  <div class="info-page">
    <Sidebar />
    <div class="content">
      <div class="header">
        <div class="profile-image-section">
          <label for="imageUpload">
            <img :src="imagePreview || '/images/user.jpg'" class="profile-image" />
            <span class="edit-icon"><FontAwesomeIcon icon="fa-solid fa-pen" />
            </span>
          </label>
          <input type="file" id="imageUpload" accept="image/*" @change="handleImageChange" hidden />
        </div>
        <h2>{{ form.name }} {{ form.fullName }}</h2>
      </div>

      <form @submit.prevent="updateProfile" class="profile-form">
        <div class="grid">
          <div>
            <label>First Name</label>
            <input v-model="form.name" type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <input v-model="form.fullName" type="text" />
          </div>
          <div>
            <label>Email</label>
            <input v-model="form.email" type="email" disabled />
          </div>
          <div>
            <label>Phone Number</label>
            <input v-model="form.mobile" type="text" />
          </div>
          <div>
            <label>Location</label>
            <input v-model="form.location" type="text" />
          </div>
          <div>
            <label>Postal Code</label>
            <input v-model="form.postalCode" type="text" />
          </div>
        </div>

        <div class="btn-wrapper">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import { useAuthStore } from '@/stores/auth'

definePageMeta({ layout: 'registered' })

const auth = useAuthStore()

const form = ref({
  name: '',
  fullName: '',
  email: '',
  mobile: '',
  location: '',
  postalCode: '',
})

const imagePreview = ref('')

onMounted(() => {
  form.value.name = auth.name || localStorage.getItem('username') || '';
  form.value.fullName = auth.fullName || localStorage.getItem('fullName') || '';
  form.value.mobile = auth.mobile || localStorage.getItem('mobile') || '';
  form.value.location = auth.location || localStorage.getItem('location') || '';
  form.value.postalCode = auth.postalCode || localStorage.getItem('postalCode') || '';
  form.value.email = auth.email;
  imagePreview.value = auth.profileImage || localStorage.getItem('userImage') || '/images/user.jpg'
})

const handleImageChange = async (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    imagePreview.value = reader.result
    auth.setProfileImage(reader.result)
  }
  reader.readAsDataURL(file)
}

console.log('Token:', localStorage.getItem('token'));
const updateProfile = async () => {
  try {
    const res = await fetch('http://localhost:5000/auth/updateProfile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name: form.value.name,
        fullName: form.value.fullName,
        email: form.value.email,
        mobile: form.value.mobile,
        location: form.value.location,
        postalCode: form.value.postalCode,
        profileImage: imagePreview.value,
      }),
    });
    console.log('Sending token:', localStorage.getItem('token'));


    const data = await res.json();

    if (res.ok) {
      auth.setName(form.value.name)
      auth.setProfileImage(imagePreview.value)

      // Update localStorage
      localStorage.setItem('username', form.value.name);
      localStorage.setItem('mobile', form.value.mobile);
      localStorage.setItem('userImage', imagePreview.value);
      localStorage.setItem('fullName', form.value.fullName);
      localStorage.setItem('location', form.value.location);
      localStorage.setItem('postalCode', form.value.postalCode);

      alert('Profile updated successfully!');
    } else {
      alert(data.message || 'Failed to update profile');
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong');
  }
};
</script> -->

<template>
  <div class="info-page flex flex-col md:flex-row p-4 md:p-[50px] bg-[#fdf6ee] min-h-screen">
    <Sidebar />
    <div class="content flex-1 p-0 mt-6 md:mt-0">
      <div class="header text-center relative mb-4">
        <div class="profile-image-section inline-block relative mx-auto">
          <label for="imageUpload">
            <img
              :src="imagePreview || auth.profileImage || '/images/user.jpg'"
              class="w-[120px] h-[120px] rounded-full border-3 border-[#5a3d2b] object-cover cursor-pointer"
            />
            <span
              class="absolute bottom-0 right-1 bg-[#4e3629] text-[#FFEAD6] rounded-full text-xs p-2 cursor-pointer"
            >
              <FontAwesomeIcon icon="fa-solid fa-pen"  class="pen-icon" />
            </span>
          </label>
          <input type="file" id="imageUpload" accept="image/*" @change="handleImageChange" hidden />
        </div>
        <h3 class="mt-2 text-[22px] text-[#4e3629] font-semibold">{{ form.name }} {{ form.fullName }}</h3>
      </div>

      <div
        v-if="message.text"
        :class="[
          'text-center w-[90%] md:w-[40%] py-2 px-4 rounded-full font-medium my-4 mx-auto transition',
          message.type === 'success' ? 'text-[#4e3629] border border-[#7c5743]' : 'bg-[#fff5f5] text-[#e53e3e] border border-[#fed7d7]'
        ]"
      >
        {{ message.text }}
      </div>

      <form @submit.prevent="updateProfile" class="profile-form max-w-[800px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-8">
          <div>
            <label class="text-[#4e3629] font-medium">First Name</label>
            <input v-model="form.name" type="text" class="w-full p-3 border border-[#b29583] rounded-full mt-1 bg-transparent" />
          </div>
          <div>
            <label class="text-[#4e3629] font-medium">Last Name</label>
            <input v-model="form.fullName" type="text" class="w-full p-3 border border-[#b29583] rounded-full mt-1 bg-transparent" />
          </div>
          <div>
            <label class="text-[#4e3629] font-medium">Email</label>
            <input v-model="form.email" type="email" disabled class="w-full p-3 border border-[#b29583] rounded-full mt-1 bg-transparent" />
          </div>
          <div>
            <label class="text-[#4e3629] font-medium">Phone Number</label>
            <input v-model="form.mobile" type="text" class="w-full p-3 border border-[#b29583] rounded-full mt-1 bg-transparent" />
          </div>
          <div>
            <label class="text-[#4e3629] font-medium">Location</label>
            <input v-model="form.location" type="text" class="w-full p-3 border border-[#b29583] rounded-full mt-1 bg-transparent" />
          </div>
          <div>
            <label class="text-[#4e3629] font-medium">Postal Code</label>
            <input v-model="form.postalCode" type="text" class="w-full p-3 border border-[#b29583] rounded-full mt-1 bg-transparent" />
          </div>
        </div>

        <div class="btn-wrapper text-center">
          <button
            type="submit"
            class="bg-[#3e2723] text-[#fad4a2] px-10 py-3 rounded-full font-bold text-sm hover:bg-[#fad4a2] hover:text-[#4e3629] transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

.pen-icon{
  color : #fdf6ee;
  border-radius: 50%;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const form = ref({
  name: '',
  fullName: '',
  email: '',
  mobile: '',
  location: '',
  postalCode: '',
})

const imagePreview = ref('')
const message = ref({
  text: '',
  type: '' // 'success' أو 'error'
})

onMounted(() => {
  form.value.name = auth.name || localStorage.getItem('username') || '';
  form.value.fullName = auth.fullName || localStorage.getItem('fullName') || '';
  form.value.mobile = auth.mobile || localStorage.getItem('mobile') || '';
  form.value.location = auth.location || localStorage.getItem('location') || '';
  form.value.postalCode = auth.postalCode || localStorage.getItem('postalCode') || '';
  form.value.email = auth.email || localStorage.getItem('email');
  imagePreview.value = auth.profileImage || localStorage.getItem('userImage') || '/images/user.jpg';
})

const handleImageChange = async (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    imagePreview.value = reader.result
    auth.setProfileImage(reader.result)
  }
  reader.readAsDataURL(file)
}

const showMessage = (text, type = 'success') => {
  message.value = { text, type }
  setTimeout(() => {
    message.value.text = ''
  }, 5000)
}

const updateProfile = async () => {
  try {
    const res = await fetch('http://localhost:5000/auth/updateProfile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name: form.value.name,
        fullName: form.value.fullName,
        mobile: form.value.mobile,
        location: form.value.location,
        postalCode: form.value.postalCode,
        profileImage: imagePreview.value,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      auth.setName(form.value.name)
      auth.setProfileImage(imagePreview.value)

      // Update localStorage
      localStorage.setItem('username', form.value.name);
      localStorage.setItem('mobile', form.value.mobile);
      localStorage.setItem('userImage', imagePreview.value);
      localStorage.setItem('fullName', form.value.fullName);
      localStorage.setItem('location', form.value.location);
      localStorage.setItem('postalCode', form.value.postalCode);

      showMessage('your data is updated successfully ', 'success')
    } else {
      showMessage(data.message || 'update failed ', 'error')
    }
  } catch (err) {
    console.error(err);
    showMessage('try again ', 'error')
  }
};
</script>
