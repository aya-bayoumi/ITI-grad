<!-- <template>
    <div class="flex gap-2 w-full">
        <div class="w-1/2">
        <cartCard />
        <cartCard />
        <cartCard />
        <cartCard />
    </div>
<div class="w-1/2">
        <div>
            <h2>Cart totals</h2>
            <hr class="border-1 border-[#4E3629] ">
        </div>
        <div class="flex">
            <div class="flex flex-col gap-1">
                <p>Subtotals</p>
                <p>Shipping</p>
            </div>
            <div class="flex flex-col gap-1">
                <p>$3.88</p>
                <p>$1</p>
            </div>
        </div>
        <div>
            <hr class="border-1 border-[#4E3629]">

        </div>
        <div class="flex gap-5">
            <p>Total</p>
            <p class=" ml-52">$4.88</p>
        </div>
        <div>
            <input class=" rounded-full border-2 text-xs mr-20" placeholder="Coupon Code"></input>
            <button class="bg-[#4E3629] w-30 rounded-full text-white text-xs">Apply Coupon</button>
        </div>

        <div>
            <button class="w-30 rounded-full border-2 text-xs bg-[#4E3629] text-white">Checkout now</button>
        </div>
        <div class="flex gap-5 mt-5">
            <i class="fa-solid fa-arrow-left"></i>
            <p>Continue shopping</p>

        </div>
    </div>
    </div>
</template>
<script setup>
  import cartCard from '~/components/cartCard.vue';


</script> -->

<template >
    <div class="flex-row gap-2 w-full my-18 mx-5 md:flex items-center">
        <div class="md:w-1/2 w-[90%] ">
            <cartCard 
                v-for="(item, index) in cartItems" 
                :key="index"
                :item="item" 
                @remove="removeItem(index)"
                @updateQuantity="updateQuantity(index, $event)"
            />
        </div>

        <div class="w-[90%] me-10 pr-10 pl-5 md:w-1/2">
            <div>
                <h2 class="mb-5 font-bold text-2xl text-center">Cart totals</h2>
                <hr class="border-1 border-[#4E3629] mb-5">
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col gap-1">
                    <p class="mb-3">Subtotals</p>
                    <p>Shipping</p>
                </div>
                <div class="flex flex-col gap-1 mb-5 justify-between">
                    <p>${{ subtotal.toFixed(2) }}</p>
                    <p>${{ shipping }}</p>
                </div>
            </div>
            <div>
                <hr class="border-1 border-[#4E3629] mb-5">
            </div>
            <div class="flex gap-5 mb-5 justify-between">
                <p>Total</p>
                <p class="ml-52">${{ total.toFixed(2) }}</p>
            </div>
            <div class="mb-5 flex justify-between"> 
                <input 
                    v-model="couponCode"
                    class="rounded-full border-2 text-xs mr-20 p-1 border-[#A67B5B] text-[#A67B5B]"  
                    placeholder="Coupon Code"
                />
                <button @click="applyCoupon" class="bg-[#A67B5B] w-30 rounded-full text-[#FED8B1]  text-xs p-2 cursor-pointer hover:bg-[#4E3629] hover:text-[#FED8B1] ">
                    Apply Coupon
                </button>
            </div>

            <div class="flex justify-center">  
                <button @click="checkoutNow" class="w-40 rounded-full border-2 text-xs bg-[#4E3629] text-[#FED8B1] p-4 cursor-pointer hover:bg-[#FED8B1] hover:text-[#4E3629]">
                    Checkout now
                </button>
            </div>
            <div class="flex gap-5 mt-5 justify-center items-center ">
                <i class="fa-solid fa-arrow-left cursor-pointer"></i>
                <p>Continue shopping</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue';
import cartCard from '~/components/cartCard.vue';
definePageMeta({ layout: 'registered' })


const cartItems = ref([]);
const shipping = 10; // قيمة ثابتة
const couponCode = ref("");
const apiTotal = ref(0);

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const total = computed(() => subtotal.value + shipping);

const applyCoupon = () => {
  if (couponCode.value === "DISCOUNT10") {
    alert("Coupon applied! 10% off");
    cartItems.value = cartItems.value.map(item => ({
      ...item,
      price: item.price * 0.9 
    }));
  } else {
    alert("Invalid coupon");
  }
};

const checkoutNow = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert("You must be logged in to place an order.");
    return;
  }

  const payload = {
    books: cartItems.value.map(item => ({
      bookId: item.id,
      quantity: item.quantity
    }))
  };
  // /my-orders
  try {
    const res = await fetch('http://localhost:5000/cart/', {
      method: 'POST',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    console.log("Checkout response status:", res.status);

    if (res.ok) {
      const result = await res.json();
      alert("✅ Order placed successfully!");
      console.log("Order response:", result);
      cartItems.value = []; // Clear cart if you want
    } else {
      const errorData = await res.json();
      alert(`❌ Failed to place order: ${errorData.message || res.statusText}`);
    }
  } catch (err) {
    console.error("🚨 Error placing order:", err);
    alert("Something went wrong while placing your order.");
  }
};


const removeItem = async (index) => {
  const token = localStorage.getItem('token');
  const item = cartItems.value[index];

  try {
    const res = await fetch(`http://localhost:5000/cart/remove`, {
      method: 'DELETE',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bookId: item.id
      })
    });

    if (res.ok) {
      // إزالة العنصر من الواجهة بعد نجاح الحذف
      cartItems.value.splice(index, 1);
    } else {
      console.error('فشل حذف العنصر من السلة');
    }
  } catch (err) {
    console.error('خطأ في الاتصال بالسيرفر:', err);
  }
};


const updateQuantity = (index, newQuantity) => {
  if (newQuantity > 0) {
    cartItems.value[index].quantity = newQuantity;
  }
};

onMounted(async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("No token found in localStorage");
      return;
    }
    const res = await fetch('http://localhost:5000/cart/',{
        method: 'GET',  
        headers: {
        'Authorization': `${token}`, // ✅ تمرير التوكين هنا
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log("✅ بيانات السلة:", data);

    // تحويل بيانات الـ books إلى cartItems بالشكل المطلوب
    // cartItems.value = data.books.map(book => ({
    //   id: book.bookId,
    //   title: book.title,
    //   price: book.price,
    //   quantity: book.quantity,
    //   image: book.image // تقدر تستخدم book.image إذا كان موجود
    // }));

    if (data.books && data.books.length > 0) {
      cartItems.value = data.books.map(book => ({
        id: book.bookId,
        title: book.title,
        price: book.price,
        quantity: book.quantity,
        image: book.image
      }));
      apiTotal.value = data.total;
    } else {
      console.log("🛒 السلة فارغة");
    }

  } catch (error) {
    console.error("فشل في تحميل السلة:", error);
  }
});
</script>
<style scoped>

</style>
