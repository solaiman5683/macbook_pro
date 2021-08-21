// Function for adding a extra memory cost;
function extraMemoryCost(memorySize, memoryCost) {
    const memory8Gb = document.getElementById("memory-8gb");
    const memory16Gb = document.getElementById("memory-16gb");
    if (memorySize == 8) {
        memory8Gb.classList.add("selected");
        memory16Gb.classList.remove("selected");
    } else if (memorySize == 16) {
        memory8Gb.classList.remove("selected");
        memory16Gb.classList.add("selected");
    }

    document.getElementById("extra-memory-cost").innerText = memoryCost;
    document.getElementById("total-price").innerText = calculateTotal();
    document.getElementById("grand-total").innerText = calculateTotal();
}

// Function for adding a extra storage cost;
function extraStorageCost(storageSize, storageCost) {
    const storage256Gb = document.getElementById("ssd-256gb");
    const storage512Gb = document.getElementById("ssd-512gb");
    const storage1Tb = document.getElementById("ssd-1tb");
    if (storageSize == 256) {
        storage256Gb.classList.add("selected");
        storage512Gb.classList.remove("selected");
        storage1Tb.classList.remove("selected");
    } else if (storageSize == 512) {
        storage256Gb.classList.remove("selected");
        storage512Gb.classList.add("selected");
        storage1Tb.classList.remove("selected");
    } else if (storageSize == 1000) {
        storage256Gb.classList.remove("selected");
        storage512Gb.classList.remove("selected");
        storage1Tb.classList.add("selected");
    }
    document.getElementById("extra-storage-cost").innerText = storageCost;

    document.getElementById("total-price").innerText = calculateTotal();
    document.getElementById("grand-total").innerText = calculateTotal();
}

// Function for calculating Delivery cost based on time
function deliveryCost(deliveryMathodes, deliveryCost) {
    const freeDelivery = document.getElementById("free-delivery");
    const paidDelivery = document.getElementById("paid-delivery");

    if (deliveryMathodes == "free") {
        freeDelivery.classList.add("selected");
        paidDelivery.classList.remove("selected");
    } else if (deliveryMathodes == "paid") {
        freeDelivery.classList.remove("selected");
        paidDelivery.classList.add("selected");
    }

    document.getElementById("delivery-cost").innerText = deliveryCost;
    document.getElementById("total-price").innerText = calculateTotal();
    document.getElementById("grand-total").innerText = calculateTotal();
}


//Calculate Total Price
function calculateTotal() {
    const extraMemoryCost = document.getElementById("extra-memory-cost");
    const memoryCost = parseInt(extraMemoryCost.innerText);
    const extraStorageCost = document.getElementById("extra-storage-cost");
    const storageCost = parseInt(extraStorageCost.innerText);
    const extraDeliveryCost = document.getElementById("delivery-cost");
    const deliveryCost = parseInt(extraDeliveryCost.innerText);

    const totalCost = 1299 + memoryCost + storageCost + deliveryCost;

    return totalCost;
}

// Calculate Total price with promo code Discount
function calculateDiscountedTotal(promo) {
    if (promo == "stevekaku") {
        const discountAmount = (calculateTotal() / 100) * 20;
        const totalPrice = calculateTotal() - discountAmount;
        document.getElementById("grand-total").innerText = totalPrice;
        document.getElementById("promo-code-error").innerText = "";
    } else if (promo == "") {
        document.getElementById("promo-code-error").innerText = "Enter Promo Code!";
    } else {
        document.getElementById("grand-total").innerText = calculateTotal();
        document.getElementById("promo-code-error").innerText = "Enter Valid Promo!";
    }
};


// Event Handlers for extra Memory Cost
document.getElementById("memory-8gb").addEventListener("click", function () {
    extraMemoryCost(8, 0)
})
document.getElementById("memory-16gb").addEventListener("click", function () {
    extraMemoryCost(16, 180)
})

// Event handler for extra Storage Cost
document.getElementById("ssd-256gb").addEventListener("click", function () {
    extraStorageCost(256, 0);
})
document.getElementById("ssd-512gb").addEventListener("click", function () {
    extraStorageCost(512, 100);
})
document.getElementById("ssd-1tb").addEventListener("click", function () {
    extraStorageCost(1000, 180);
})


// Event handlers for Delivery cost
document.getElementById("free-delivery").addEventListener("click", function () {
    deliveryCost("free", 0)
})
document.getElementById("paid-delivery").addEventListener("click", function () {
    deliveryCost("paid", 20)
})

// Event handler for apply promo code. 
document.getElementById("apply-promo").addEventListener("click", function () {
    const promoCode = document.getElementById("promo-code");
    console.log(promoCode)
    calculateDiscountedTotal(promoCode.value);
    promoCode.value = "";
})

document.getElementById("promo-code").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        const promoCode = document.getElementById("promo-code");
        console.log(promoCode)
        calculateDiscountedTotal(promoCode.value);
        promoCode.value = "";
    }
})