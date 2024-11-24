// Question 4: Shipping Cost Calculator

function calculateShippingCost(totalOrder) {
  // เริ่มเขียนโค้ดที่นี่
    if (totalOrder > 4000)
        return 'Shipping is free.';
    else if (totalOrder > 2000)
        return 'Shipping cost is 250 Baht.';
    else
        return 'Shipping cost is 500 Baht.';
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
