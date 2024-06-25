function OpenNav() {
    document.getElementById("Nav").style.width = "100%";
}
  function CloseNav() {
    document.getElementById("Nav").style.width = "0";
}
function url() {
    location.href = "https://www.hay88.one/?inviteCode=3581207";
  }
// Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    autoplay:true,
    loop:true,
  });

const head = document.querySelector("#head")
function header(){
  const headContent = document.createElement("div")
  headContent.innerHTML =`
    <div class="max-w-7xl m-auto  md:px-2 md:py-1.5">
            <div class="flex  md:flex-row  md:justify-between px-5 md:px-0 items-center text-white relative">
                <!-- open nav -->
                <div class="menu-icon absolute right-3 top-7 md:hidden text-2xl text-gray-50" onclick="OpenNav()">
                    <ion-icon name="menu"></ion-icon>
                </div>
                <!-- logo -->
                <div class="logo max-w-[150px] cursor-pointer py-3">
                    <a href="./index.html"><img src="/image/logo.png"></a>
                </div>
                <!-- navigation screen -->
                <nav id="Nav" class="z-40  fixed top-0 left-0 w-0 md:w-auto h-full overflow-x-hidden md:relative md:h-auto duration-300">
                    <div class="md:hidden flex justify-end text-3xl text-white p-2 font-bold w-full h-full  opacity-80">
                        <ion-icon onclick="CloseNav()" name="close"></ion-icon>
                    </div>
                    <div class="h-full w-[350px] md:w-auto opacity-100 md:relative absolute top-0 flex flex-col bg-gray-50 md:bg-transparent px-5">
                        <div class=" md:hidden *:w-28 pt-10 *:mb-5 flex flex-col justify-center md:items-center gap-1 py-1.5  text-[15px] font-[500] tracking-wide *:md:py-1.5 *:py-1 *:rounded-2xl *:duration-300">
                            <button onclick="url()" class="bg-[#b20000]">Đăng Ký</button>
                            <button onclick="url()" class="bg-[#efa416]">Đặng Nhập</button>
                        </div>
                        <!-- menu item -->
                        <div class="max-w-6xl text-gray-500 pl-5 md:text-white md:m-auto cursor-pointer">
                            <ul class="  flex-col  flex md:flex-row md:justify-center md:items-center  gap-5  md:border-none sm:text-[12px] font-semibold">
                                <li class="bg-[#b20000] px-[5px] py-1 rounded-2xl hidden lg:block "><a href="./index.html">XO88s</a></li>
                                <li><a href="./xo88/TheThao/TheThao.html">THỂ THAO</a></li>
                                <li><a href="./xo88/LiveCasino/LiveCasino.html">LIVE CASINO</a></li>
                                <li><a href="./xo88/LoDe/LoDe.html">LÔ ĐỀ</a></li>
                                <li><a href="./xo88/DangKy/Dangky.html">ĐĂNG KÝ & ĐĂNG NHẬP</a></li>
                                <li><a href="./xo88/Nap/Nap.html">NẠP & RÚT</a></li>
                                <li><a href="./xo88/Huong/Huong.html">HƯỚNG DẪN</a></li>
                                <li><a href="./xo88/Khuyen/Khuyen.html">KHUYẾN MÃI</a></li>
                                <li><a href="./xo88/HoTro/HoTro.html">HỖ TRỢ CSKH</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- sign in -->
                <div class=" md:bg-transparent w-full md:w-auto  *:w-28 flex gap-1 py-1.5 justify-center items-center text-[15px] font-[500] tracking-wide *:md:py-1.5 *:py-1 *:rounded-2xl *:duration-300">
                    <button onclick="url()" class="bg-[#b20000]">Đăng Ký</button>
                    <button onclick="url()" class="bg-[#efa416]">Đặng Nhập</button>
                </div>
            </div>
        </div>`
        head.appendChild(headContent)
}header();

const footer = document.querySelector("#footer")
function foot (){
  const footerContent = document.createElement("div")
  footerContent.innerHTML=`
    <div class="max-w-7xl m-auto  text-white">
            <div class=" px-3 py-12 flex justify-between grid  grid-cols-1 sm:grid-cols-3">
                <div>
                    <div class="w-[150px]">
                        <img src="/image/logo.png" alt="">
                    </div>
                    <p class="pt-4 pr-5">XO88s là một nhà cá cược trực tuyến hàng đầu tại Châu Âu, với nền tảng côngnghệ tiên tiến chúng tôi đã và đang mang đến những sản phẩm cá cược chấtlượng nhất như: Thể Thao, Sòng Bài, Lô Đề, Number game, Kenno....</p>
                </div>
                <div class=" sm:text-center ">
                    <h1 class="text-[17px] font-semibold ">NHÀ CUNG CẤP</h1>
                    <img class="sm:m-auto pt-5" src="/image/footer1.jpg" alt="">
                    
                </div>
                <div class="flex-row items-start">
                    <ul class="*:text-[17px] font-semibold *:pb-5">
                        <li><a href="./xo88/VeChung/VeChung.html">VỀ CHÚNG TÔI</a></li>
                        <li><a href="./xo88/ChinhSach/ChinhSach.html">CHÍNH SÁCH BẢO MẬT</a></li>
                        <li><a href="./xo88/Dieu/Dieu.html">ĐIỀU KHOẢN & ĐIỀU KIỆN</a></li>
                        <li><a href="./xo88/Cau/Cau.html">CÂU HỎI THƯỜNG GẶP</a></li>
                        <li><a href="./xo88/LienHe/LienHe.html">LIÊN HỆ</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <img class="w-full" src="/image/footer.jpg" alt="">
            </div>
            <div class=" text-[12px] font-bold text-center mt-6">
                <div class="mb-3 flex gap-1 justify-center items-center *:p-1 text-[20px] *:border  *:rounded-2xl *:cursor-pointer">
                    <a href="" class=" flex justify-center items-center"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="" class=" flex justify-center items-center"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="" class=" flex justify-center items-center"><ion-icon name="mail-outline"></ion-icon></a>
                    <a href="" class=" flex justify-center items-center"><ion-icon name="logo-pinterest"></ion-icon></a>
                    <a href="" class=" flex justify-center items-center"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a href="" class=" flex justify-center items-center"><ion-icon name="logo-youtube"></ion-icon></a>
                </div>
                <p>Copyright © 2024 XO88s. All rights reserved</p>
            </div>
        </div>`
        footer.appendChild(footerContent)
}
foot();