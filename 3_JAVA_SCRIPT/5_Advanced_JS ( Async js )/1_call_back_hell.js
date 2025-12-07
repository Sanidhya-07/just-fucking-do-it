orderDetails = {
  orderId: 123654,
  food: ["pizza", "burger", "coke"],
  cost: 650,
  customer_name: "sanidhya naik",
  address: "pune",
  restaurant_location: "mumbai",
};

const { orderId, food, cost, customer_name, address, restaurant_location } =
  orderDetails;

function placeOrder(orderDetails, callback) {
  console.log(`Payment of ${cost} is processing...`);

  setTimeout(() => {
    console.log(`Payment is completed and order get placed !`);
    callback(orderDetails);
  }, 2000);
}

function preparingFood(orderDetails, callback) {
  console.log(`Your food preparation of ${food} is started.`);

  setTimeout(() => {
    console.log(`Your order is now prepared.`);
    callback(orderDetails);
  }, 4000);
}

function pickupOrder(orderDetails, callback) {
  console.log(
    `Delivery boy is on its way to ${restaurant_location} to pickup your order.`
  );

  setTimeout(() => {
    console.log(
      `I have picked up your order and i am on my way to ${address} deliver it.`
    );
    callback(orderDetails);
  }, 5000);
}

function deliverOrder(orderDetails) {
  setTimeout(() => {
    console.log(`Delivery boy reached ${address}.`);
  }, 6000);

  setTimeout(() => {
    console.log(`order is delivered successfully.`);
    console.log(`Thank you ${customer_name} order again.`);
  }, 10000);
}

// callback hell ...

placeOrder(orderDetails, (orderDetails) => {
  preparingFood(orderDetails, (orderDetails) => {
    pickupOrder(orderDetails, (orderDetails) => {
      deliverOrder(orderDetails);
    });
  });
});
