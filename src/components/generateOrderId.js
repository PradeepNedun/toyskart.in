let orderId = "";

function getOrderId(phone) {
  orderId = localStorage.getItem("orderId");
  if (!orderId) {
    orderId = Math.random();
    localStorage.setItem("orderId", phone +"_"+ orderId);
  }
  return orderId;
}

function removeOrderId() {
  localStorage.setItem("orderId", "");
}

export { getOrderId, removeOrderId };
