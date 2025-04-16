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
  <div class="info-page">
    <Sidebar />
    <div class="content">
      <div class="header">
        <div class="profile-image-section">
          <label for="imageUpload">
            <img :src="'/images/user.jpg' || imagePreview " class="profile-image" />
            <span ><FontAwesomeIcon class="edit-icon" icon="fa-solid fa-pen" />
            </span>
          </label>
          <input type="file" id="imageUpload" accept="image/*" @change="handleImageChange" hidden />
        </div>
        <h2>{{ form.name }} {{ form.fullName }}</h2>
      </div>

      <div v-if="message.text" :class="['message', message.type]">
        {{ message.text }}
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
        email: form.value.email,
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

      showMessage('your data is updated successfully', 'success')
    } else {
      showMessage(data.message || 'update failed', 'error')
    }
  } catch (err) {
    console.error(err);
    showMessage('try again', 'error')
  }
};
</script>



<style scoped>
  .message {
    padding: 8px 0px;
    margin:10px auto;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
    text-align: center;
    width:40%;
  }
  
  .message.success {
    background-color: #e6ffed;
    color: #2d8a4b;
    border: 1px solid #a7f3c8;
  }
  
  .message.error {
    background-color: #fff5f5;
    color: #e53e3e;
    border: 1px solid #fed7d7;
  }
.info-page {
  padding: 50px;
  background: #fdf6ee;
  height: 100%;
  display: flex;
}
h1 {
  margin: 10px 320px;
  color: #4e3629;
  font-size: 24px;
  font-weight: bold;
}
.content {
  flex: 1;
  padding: 0px;
}

.header {
  text-align: center;
  margin-bottom: 0px;
  position: relative;
}

.profile-image-section {
  display: inline-block;
  position: relative;
}

.edit-icon {
  position: absolute;
  bottom: 0;
  right: 5px;
  background-color: #4e3629;
  color:  #FFEAD6;
  border-radius:50%;
  font-size: 10px;
  padding: 7px;
  cursor: pointer;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #5a3d2b;
  object-fit: cover;
  cursor: pointer;
}

h2 {
  margin-top: 10px;
  font-size: 22px;
  color: #4e3629;
  font-weight: 600;
}

.profile-form {
  max-width: 800px;
  margin: auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
  margin-bottom: 30px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #b29583;
  border-radius: 40px;
  margin-top: 5px;
  background: none;
}

label {
  color: #4e3629;
  font-weight: 500;
}

.btn-wrapper {
  text-align: center;
}

button {
  background: #3e2723;
  color: #fad4a2;
  padding: 12px 40px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
}

button:hover {
  background-color: #fad4a2;
  color: #4e3629;
}

</style>
