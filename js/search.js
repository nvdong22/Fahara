fetch('http://localhost:3000/search')
.then(res => {
  return  res.json()
}) 
.then(storeData => {
    const searchInput = document.querySelector('.header__navbar-item-search')
    const inputBox = document.querySelector('.header__navbar-item-search')
    const  listHistory= document.querySelector('.header_searh-input')
    const inputDefault = document.querySelector('input')
    inputBox.onkeyup = (e) => {
        let userData =  e.target.value;
        let emptyArray = [];
        if(userData){
            emptyArray = storeData.filter((data) => {
                return data.name.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, '').toLocaleLowerCase().includes(userData.toLocaleLowerCase());
            });
            emptyArray = emptyArray.map((data) =>{
                return data = `<div class="header_searh-input-none">
                        <img class="header_searh-img"
                            src="${data.img}"
                            alt="">
                        <ul class="header_searh-list">
                            <li class="header_searh-item-name">
                                ${data.name}
                            </li>
                            <li class="header_searh-item-price">
                                ${data.price}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`
            })
            console.log(emptyArray)
            searchInput.classList.add('active')
        }else{
            searchInput.classList.remove('active')
        }
        showSuggestions(emptyArray)
    }
    
    function showSuggestions(list){
        let listData;
        if(!list.length){
            userValue = inputBox.value;
            listData = '<span>'+' '+'</span>'
        }else{
            listData = list.join('')
        }
        listHistory.innerHTML = listData;
    }
})
