fetch('http://localhost:3000/produceSale')
.then(respon => {
  return  respon.json()
}) 
.then( produceData => {
    var ProduceSale = document.querySelector('.grid__row-list-sale')
    var htmls = produceData.map(function(data){
        return `  
        <div class="grid__column-2-4">
            <div class="content_list-sale-product">
                <span class="content_product-sale-off">
                    ${data.sale}
                </span>
                <div class="content_product-sale-item-img">
                    <a href="./sp/sanpham/spindex.html">
                        <img src="${data.img}"
                            alt="" class="content_product-sale-img">
                    </a>
                </div>


                <h2 class="content_product-sale-heading">
                    <a href="./sp/sanpham/spindex.html">
                       ${data.name}
                    </a>
                </h2>

                <div class="content_product-sale-item">
                    <div class="content_product-sale-price-current">${data.price}</div>
                    <div class="content_product-sale-chapter">Tập 2</div>
                </div>
                <div class="content_product-sale-price-old">
                    ${data.oldprice}
                </div>
                <div class="content_product-sale-buyed">
                    <div class="content_product-sale-buyed-text">
                        Đã bán 77
                    </div>
                    <span class="content_product-sale-buyed-modal">

                    </span>

                </div>

            </div>
        </div>`
    })
    ProduceSale.innerHTML = htmls.join('')
})