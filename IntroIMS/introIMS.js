 const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)
    if(toggle && navbar){
        toggle.addEventListener('click', ()=>{
            navbar.classList.toggle('show')
            toggle.classList.toggle('rotate')
            bodypadding.classList.toggle('expander')
        })
    }
 }
 showMenu('nav_toggle', 'navbar', 'body')

 const linkColor = document.querySelectorAll('.nav_link');
 function colorLink(){
    linkColor.forEach(link => link.classList.remove('active'))
    this.classList.add('active')
 }
 linkColor.forEach(link => link.addEventListener('click', colorLink))

 const dropDownProfile = (menuId, userpicId) => {
    const userpic = document.getElementById(userpicId),
    menuProfile = document.getElementById(menuId)
    if(userpic && menuProfile){
        userpic.addEventListener('click', (e)=>{
            e.stopPropagation();
            menuProfile.classList.toggle('active')
        });
        window.addEventListener('click', (e) => {
            if(!menuProfile.contains(e.target) && !userpic.contains(e.target)){
                menuProfile.classList.remove('active')
            }
         });
    }
    
 };
 dropDownProfile('drop-menu-profile','userpic')

 const inventoryItems = [
    {
        productId: "SP001",
        productName: "Sản phẩm A",
        quantity: 150,
        price: "120,000 VND",
        location: "Kệ A1",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP002",
        productName: "Sản phẩm B",
        quantity: 200,
        price: "100,000 VND",
        location: "Kệ B2",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP001",
        productName: "Sản phẩm A",
        quantity: 150,
        price: "120,000 VND",
        location: "Kệ A1",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP002",
        productName: "Sản phẩm B",
        quantity: 200,
        price: "100,000 VND",
        location: "Kệ B2",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP001",
        productName: "Sản phẩm A",
        quantity: 150,
        price: "120,000 VND",
        location: "Kệ A1",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP002",
        productName: "Sản phẩm B",
        quantity: 200,
        price: "100,000 VND",
        location: "Kệ B2",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP001",
        productName: "Sản phẩm A",
        quantity: 150,
        price: "120,000 VND",
        location: "Kệ A1",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP002",
        productName: "Sản phẩm B",
        quantity: 200,
        price: "100,000 VND",
        location: "Kệ B2",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP001",
        productName: "Sản phẩm A",
        quantity: 150,
        price: "120,000 VND",
        location: "Kệ A1",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP002",
        productName: "Sản phẩm B",
        quantity: 200,
        price: "100,000 VND",
        location: "Kệ B2",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP001",
        productName: "Sản phẩm A",
        quantity: 150,
        price: "120,000 VND",
        location: "Kệ A1",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP002",
        productName: "Sản phẩm B",
        quantity: 200,
        price: "100,000 VND",
        location: "Kệ B2",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP001",
        productName: "Sản phẩm A",
        quantity: 150,
        price: "120,000 VND",
        location: "Kệ A1",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP002",
        productName: "Sản phẩm B",
        quantity: 200,
        price: "100,000 VND",
        location: "Kệ B2",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP001",
        productName: "Sản phẩm A",
        quantity: 150,
        price: "120,000 VND",
        location: "Kệ A1",
        image: "/Assets/user0.png" 
    },
    {
        productId: "SP002",
        productName: "Sản phẩm B",
        quantity: 200,
        price: "100,000 VND",
        location: "Kệ B2",
        image: "/Assets/user0.png" 
    }];

const inventoryContainer = document.querySelector("#inventory-list .inventory-container");

inventoryItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("inventory-item");
    itemDiv.innerHTML = `
        <img src="${item.image}" class="pic-product">
        <h3>ID Product: ${item.productId}</h3>
        <p>Name: ${item.productName}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: ${item.price}</p>
        <p>Location: ${item.location}</p>
    `;
    inventoryContainer.appendChild(itemDiv);
});

function displayInventory(items) {
    inventoryContainer.innerHTML = "";
    items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("inventory-item");
        itemDiv.innerHTML = `
            <img src="${item.image}" name="pic-product">
            <h3>ID Product: ${item.productId}</h3>
            <p>Name: ${item.productName}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: ${item.price}</p>
            <p>Location: ${item.location}</p>
        `;
        inventoryContainer.appendChild(itemDiv);
    });
}

function searchInventory() {
    const searchTerm = document.getElementById("search-text").value.toLowerCase();
    const filteredItems = inventoryItems.filter(item => 
        item.productName.toLowerCase().includes(searchTerm) || 
        item.productId.toLowerCase().includes(searchTerm)
    );
    displayInventory(filteredItems);
}
document.getElementById("search-button").addEventListener("click", searchInventory);
document.getElementById("search-text").addEventListener("input", searchInventory);

let showAll = false;
function showInventory(items){
    inventoryContainer.innerHTML = "";
    const itemToShow = showAll ? items : items.slice(0, 5);
    
    itemToShow.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("inventory-item");
        itemDiv.innerHTML = `
        <img src="${item.image}" class="pic-product">
        <h3>ID Product: ${item.productId}</h3>
        <p>Name: ${item.productName}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: ${item.price}</p>
        <p>Location: ${item.location}</p>
    `;
    inventoryContainer.appendChild(itemDiv);
    });
}
function toggleViewAll(){
    showAll = !showAll;
    showInventory(inventoryItems);
    document.getElementById("view-all-btn").textContent = showAll ? "Hide Some Products" : "View All"

}

document.getElementById("view-all-btn").addEventListener("click", toggleViewAll);
showInventory(inventoryItems);

function showListInfo(listId){
    document.getElementById("inventory-list").style.display = "none";
    document.getElementById("supplier-list").style.display = "none";

    document.getElementById(listId).style.display = "block";
}


 

 
