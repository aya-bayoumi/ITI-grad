<template>
    <div class="signup-container">
      <div class="signup-box">
        <div class="signup-form">
          <h2>Get started with Qera'a</h2>
          <button @click="loginWithGoogle" class="google-btn">
            <FontAwesomeIcon :icon="['fab', 'google']" class="google-icon" />
            Continue with Google
          </button>
  
          <div class="divider">OR</div>
          <form @submit.prevent="handleSubmit">
    <div>
      <label>Name*</label>
      <input type="text" v-model="name" placeholder="Enter your name" />
      <span v-if="nameError" class="error-message">{{ nameError }}</span>
    </div>
    <div>
      <label>Email*</label>
      <input type="email" v-model="email" placeholder="Enter your email" />
      <span v-if="emailError" class="error-message">{{ emailError }}</span>
    </div>
    <div>
      <label>Password*</label>
      <input type="password" v-model="password" placeholder="Enter your password" />
      <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
    </div>
    <div class="terms">
      <input type="checkbox" v-model="agree" /> I agree to all terms, privacy policy
    </div>
    <button type="submit" class="signup-btn">Sign Up</button>
    <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
  </form>
  
          <!-- <form @submit.prevent="handleSubmit">
            <label>Name*</label>
            <input v-model="name" type="text" placeholder="Enter your name" @blur="validateName" required />
            <p v-if="nameError" class="error-message">{{ nameError }}</p>
  
            <label>Email*</label>
            <input v-model="email" type="email" placeholder="Enter your e-mail" @blur="validateField('email')" required />
            <p v-if="emailError" class="error-message">{{ emailError }}</p>
  
            <label>Password*</label>
            <input v-model="password" type="password" placeholder="Enter your password" @blur="validatePassword" required />
            <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
  
            <div class="terms">
              <input type="checkbox" v-model="agree" required />
              <span>I agree to all terms, privacy policy</span>
            </div>
  
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  
            <button type="submit" class="signup-btn">Sign Up</button>
          </form> -->
  
          <p class="login-link">
            Already have an account? <NuxtLink to="/login">Log In</NuxtLink>
          </p>
        </div>
  
        <!-- قسم صورة الكتاب -->
        <div class="illustration">
          <img src="/images/startt.png" alt="Book Illustration" />
        </div>
      </div>
    </div>
  </template>

  <script setup>

// import { ref } from 'vue'; 
// import { useRouter } from 'vue-router';

// const name = ref('');
// const email = ref('');
// const password = ref('');
// const agree = ref(false);
// const errorMessage = ref('');
// const nameError = ref('');
// const emailError = ref('');
// const passwordError = ref('');

// const router = useRouter();

// const validateName = () => {
//   if (!name.value) {
//     nameError.value = 'Name is required';
//   } else {
//     nameError.value = '';
//   }
// };

// const validateField = (field) => {
//   if (field === 'email' && !email.value) {
//     emailError.value = 'Email is required';
//   } else {
//     emailError.value = '';
//   }
// };

// const validatePassword = () => {
//   if (!password.value) {
//     passwordError.value = 'Password is required';
//   } else {
//     passwordError.value = '';
//   }
// };

// const handleSubmit = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/auth/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username: name.value, 
//         email: email.value,
//         password: password.value,
//       }),
//     });

//     const data = await res.json();
//     console.log("Server Response:", data);

//     if (!res.ok) {
//       console.error("Server Error:", data);
//       errorMessage.value = data.message || "Error signing up!";
//       return;
//     }

//     router.push("/login");
//   } catch (error) {
//     console.error("Fetch Error:", error);
//     errorMessage.value = "An unexpected error occurred. Please try again!";
//   }
// };

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const agree = ref(false);
const errorMessage = ref('');
const nameError = ref('');
const emailError = ref('');
const passwordError = ref('');

const router = useRouter();

const validateName = () => {
  if (!name.value) {
    nameError.value = 'Name is required';
  }else if(name.value.length < 3) {
    nameError.value = 'Name must be at least 3 characters long';
  } else if (!/^[a-zA-Z\s]+$/.test(name.value)) {
    nameError.value = 'Name can only contain letters and spaces';
  } else if (name.value.length > 20) {
    nameError.value = 'Name cannot exceed 20 characters';
  }
  else {
    nameError.value = '';
  }
};

const validateField = (field) => {
  if (field === 'email' && !email.value) {
    emailError.value = 'Email is required';
  } 
  else if(field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = 'Email is not valid';
  } 
  else if (field === 'email' && email.value.length > 50) {
    emailError.value = 'Email cannot exceed 50 characters';
  }
  else {
    emailError.value = '';
  }
};

const validatePassword = () => {
  if (!password.value) {
    passwordError.value = 'Password is required';
  }else if (password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters long';
  } else if (!/[A-Z]/.test(password.value)) {
    passwordError.value = 'Password must contain at least one uppercase letter';
  } else if (!/[a-z]/.test(password.value)) {
    passwordError.value = 'Password must contain at least one lowercase letter';
  } else if (!/[0-9]/.test(password.value)) {
    passwordError.value = 'Password must contain at least one number';
  } else if (!/[!@#$%^&*]/.test(password.value)) {
    passwordError.value = 'Password must contain at least one special character';
  }
  else {
    passwordError.value = '';
  }
};

const handleSubmit = async () => {
  validateName();
  validatePassword();
  validateField('email');

  if (nameError.value || passwordError.value || emailError.value) return;

  if (!agree.value) {
    errorMessage.value = "You must agree to the terms!";
    return;
  }


  try {
    const res = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name.value, 
        email: email.value,
        password: password.value,
      }),
    });

    const data = await res.json();
    console.log("Server Response:", data);

    if (!res.ok) {
      console.error("Server Error:", data);
      errorMessage.value = data.message || "Error signing up!";
      return;
    }

    localStorage.setItem('username', name.value);

    router.push("/login");
  } catch (error) {
    console.error("Fetch Error:", error);
    errorMessage.value = "An unexpected error occurred. Please try again!";
  }
};

const loginWithGoogle = async () => {
  try {
    const auth2 = await gapi.auth2.init({
      client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
    });

    const googleUser = await auth2.signIn();
    const idToken = googleUser.getAuthResponse().id_token;

    const res = await fetch('http://localhost:5000/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem('token', data.token);
      router.push('/');
    } else {
      alert(data.message || 'Google login failed!');
    }
  } catch (error) {
    alert('Error during Google login');
  }
};
  </script>
  
  
  <style scoped>
 .error-message {
  color: red;
  font-size: 14px;
  margin-top: 4px;
  opacity: 1;
  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
  max-height: 50px;
}

.error-message:empty {
  opacity: 0;
  max-height: 0;
}
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #4e342e; /* بني غامق مثل الصورة */
    color: #2e1e1e;
    font-family: "Arial", sans-serif;
  }
  
  /* 📜 تصميم الـ Card بنفس الشكل */
  .signup-box {
    background: #fdf6e3; /* بيج فاتح مثل الصورة */
    display: flex;
    padding: 20px;
    border-radius: 20px;
    width: 80%;
    min-height: 90%;
    text-align: center;
    transition: min-height 0.3s ease-in-out;
    max-width: 80%;
  }
  
  .signup-form {
    flex: 1;
    padding-right: 20px;
  }
  
  h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #3e2723;
  }
  
  .google-btn {
  background:  #FAD4A2;
  color: #3e2723;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius:40px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.google-btn:hover {
    color:#FAD4A2 ;
    background-color: #4E3629;
}
  
  .google-btn .google-icon {
    font-size: 18px;
    color: #3e2723;
  }

.google-icon {
  font-size: 18px;
}
  
  .divider {
    margin: 15px 0;
    font-size: 14px;
    color: #7c6b5e;
    position: relative;
  }
  
  .divider::before,
  .divider::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background: #d1bfa7;
  }
  
  .divider::before {
    left: 0;
  }
  
  .divider::after {
    right: 0;
  }
  
  /* 📝 المدخلات */
  label {
    display: block;
    text-align: left;
    font-size: 14px;
    margin-top: 10px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #b29583;
    border-radius: 40px;
    margin-top: 5px;
    background:none;
  }
  
  .terms {
    display: flex;

    justify-content:flex-start;
    font-size: 16px;
    margin-top: 15px; 
    color: #3e2723;
  }
  
  .terms input {
    margin-right: 5px;
    cursor: pointer;
    width: 16px;
    background-color: #8d6e63;
   
  }
  span{
    margin-left: 5px;
    margin-top: 5px;
  }
  
  .signup-btn {
    background: #3e2723;
    color: #FAD4A2;
    font-family: links;
    padding: 12px;
    width: 100%;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    margin-top: 20px;
  }
  
  .signup-btn:hover {
    background-color:#FAD4A2 ;
    color: #4E3629;  }
  
  .login-link {
    font-size: 13px;
    margin-top: 15px;
    color: #8d6e63;
  }
  
  .login-link a {
    color: #5d4037;
    font-weight: bold;
    text-decoration: none;
  }
  
  .illustration {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .illustration img {
    width: 100%;
    height: 500px;
  }
  </style>
  
