// middleware/auth.ts

// export default defineNuxtRouteMiddleware((to, from) => {
//     const token = localStorage.getItem('token');
  
//     if (token) {
//       // إذا كان التوكن موجودًا، تأكد من توجيه المستخدم بشكل صحيح
//       if (to.meta.layout === 'default') {
//         return navigateTo('/');
//       }
//     } else {
//       // إذا لم يكن التوكن موجودًا، يجب توجيه المستخدم إلى صفحة تسجيل الدخول
//       if (to.meta.layout === 'registered') {
//         return navigateTo('/login');
//       }
//     }
//   });
  