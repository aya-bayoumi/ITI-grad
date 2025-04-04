<template>
    <div class="login-container">
      <div class="login-box">

        <div class="login-form">
          <h2>Welcome Back to Qera'a</h2>
  
          <button @click="loginWithGoogle" class="google-btn">
            <FontAwesomeIcon :icon="['fab', 'google']" class="google-icon" />
            Continue with Google
          </button>
  
          <div class="divider">OR</div>
  
          <form @submit.prevent="handleSubmit">
            <label>Email*</label>
            <input v-model="email" type="email" placeholder="Enter your e-mail" required />
            <p v-if="emailError" class="error-message">{{ emailError }}</p>
  
            <label>Password*</label>
            <input v-model="password" type="password" placeholder="Enter your password" required />
            <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
  
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  
            <button type="submit" class="login-btn">Log In</button>
          </form>
  
          <p class="signup-link">
            Don't have an account? <NuxtLink to="/signup">Sign Up</NuxtLink>
          </p>
        </div>
  
        <div class="illustration">
          <img src="/images/continuee.png" alt="Book Illustration" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const emailError = ref('');
const passwordError = ref('');

const validateEmail = () => {
  if (!email.value) {
    emailError.value = 'This field is required';
  } else {
    emailError.value = '';
  }
};

const validatePassword = () => {
  if (!password.value) {
    passwordError.value = 'This field is required';
  } else {
    passwordError.value = '';
  }
};

const handleSubmit = async () => {
  validateEmail();
  validatePassword();

  if (emailError.value || passwordError.value) return;

  try {
    const res = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    const data = await res.json();

    if (!res.ok) {
      errorMessage.value = data.message || 'Invalid email or password';
      return;
    }

    localStorage.setItem('token', data.token);

    router.push('/logged');
  } catch (error) {
    errorMessage.value = 'An unexpected error occurred. Please try again!';
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
      router.push('/'); // Redirect to the registered page after successful login
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
  }
  .error-message:empty {
  opacity: 0;
  max-height: 0;
}
  
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #4e342e;
    color: #2e1e1e;
    font-family: "Arial", sans-serif;
  }
  
  .login-box {
    background: #fdf6e3;
    display: flex;
    padding: 20px;
    border-radius: 20px;
    width: 80%;
    min-height: 50%;
    text-align: center;
  }
  
  .login-form {
    flex: 1;
    padding-right: 20px;
    margin: auto;
  }
  
  h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #3e2723;
  }
  
  .google-btn {
    background: #FAD4A2;
    color: #3e2723;
    padding: 12px;
    width: 100%;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
  }
  
  .google-btn:hover {
    color: #FAD4A2;
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
    background: none;
  }
  
  .login-btn {
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
  
  .login-btn:hover {
    background-color: #FAD4A2;
    color: #4E3629;
  }
  
  .signup-link {
    font-size: 13px;
    margin-top: 15px;
    color: #8d6e63;
  }
  
  .signup-link a {
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
  
