let resim = ["resim2.jpg","resim7.jpg","resim5.jpg"]
let i =0
function ekle()
{
    i++
    const sec = document.getElementById('pro-sec')
    const ekle = document.createElement('div')
    ekle.setAttribute('class',"col-span-2 bg-[url('/img/projeler/"+ resim[i-1] +"')] hover:m-0 hover:opacity-70 duration-200 bg-cover m-3")
    sec.appendChild(ekle)
}    



