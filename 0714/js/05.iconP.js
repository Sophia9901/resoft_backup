	// 아이콘 8개
	//  window.matchMedia()를 이용해서 접속하는 웹브라우저의 가로 크기에 따라 다른 작업을 할 수 있습니다. 반응형 웹디자인을 할 때 유용한 메소드
    // 가로가 1217px라면 customer_list를 숨깁니다. hide()
    // customer_list의 요소를 list에 보냅니다.
    if (window.matchMedia("screen and (max-width: 1217px)").matches) {
		$(function () {
			$(".customer_list").hide();
			var array = [];
	var list = document.getElementsByClassName('customer_list');
	//array에 list의 길이만큼 반복하여 push()로 배열의 맨 끝에 list[i]번째의 요소를 입력합니다.
	for (var i = 0; i < list.length; i++) {
		array.push(list[i]);
	}
	
	var visiArray = [];
	//slice()는 배열의 일부분을 선택하여 새로운 배열을 만듭니다.
    //visiArray에 array요소의 0~8까지 입력합니다.
	visiArray = array.slice(0, 8);
	//CONCAT은 문자열을 이어주는 함수입니다. 예를 들어 CONCAT( first_name, last_name )은 first_name의 값과 last_name의 값을 이어서 출력합니다.
    //reverse()는 배열의 원소의 순서를 반대로 만드는 메서드
    //즉 array의 8~16 원소를 거꾸로 저장 후 24번째까지 보내기
	// array = [0 1 2 3 4 5 6 7 15 14 13 12 11 10 9 8 16 17 18 19 20 21 22 23 24] 이런 순서로 되어있을 것
	visiArray = visiArray.concat(array.slice(8, 16).reverse());
	visiArray = visiArray.concat(array.slice(16, 24));
	
	var second = 0;
	//visiArray의 길이 만큼 i를 증가 반복하여 visiArray의 i번째 있는 요소에 setAttribute를 통해 data-wow-delay의 delay 시간을 0.1초씩 늘려 나오는 시간을 재지정 
	for (var i = 0; i < visiArray.length; i++) {
		second = second + 0.1;
		visiArray[i].setAttribute('data-wow-delay', second + 's')
		visiArray[i].style.display = 'block';
	}
			//load버튼의 0번째 인덱스 가져옴
			var load = document.getElementsByClassName('load')[0];
			//숨겨진 아이콘
			//preventDefault는 a 태그나 submit 태그, button등은 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행되는데 이러한 동작을 막아줄 수 있습니다.
			//hiddenArray에 남은 array의 남은 원소들 보내기
			load.addEventListener('click', function (e) {
				e.preventDefault();
				var hiddenArray = [];
				hiddenArray = array.slice(24, 27);
				
				var hSecond = 0;
				//남은 원소의 길이 만큼 i를 증가 반복하여 남은 원소의 i번째 있는 요소에 setAttribute를 통해 data-wow-delay의 delay 시간을 0.1초씩 늘려 나오는 시간을 재지정 
				for (var i = 0; i < hiddenArray.length; i++) {
					hSecond = hSecond + 0.1;
					hiddenArray[i].setAttribute('data-wow-delay', hSecond + 's');
					hiddenArray[i].style.display = 'block';
				}
				//이벤트가 일어난 후 버튼 안보이게 하기
				load.style.display="none";
				//Window.scrollTo() 문서의 지정된 위치로 스크롤한다
				//window.pageYOffset 화면의 Y축의 상단값
				window.scrollTo(0, window.pageYOffset + 1);
				window.scrollTo(0, window.pageYOffset - 1);

				// if (document.querySelectorAll('.customer_list[style="display:none;"]').length == 0) {
				// 	load.style.display = "none";
				// }
			});
		});
	}
			// 아이콘 4개
		if (window.matchMedia("screen and (max-width: 940px)").matches) {
			$(function () {
				$(".customer_list").hide();
				var list = document.getElementsByClassName('customer_list');
				var hiddenArray = [];
				var openArray = [];
				$(".customer_list").slice(0, 12).show();
				for (var i = 0; i < list.length; i++) {
					if (list[i].style.display == "none") {
						hiddenArray.push(list[i]);
					} else {
						openArray.push(list[i]);
					}
				}
				// 보여진 아이콘
				var second = 0
				for (var i = 0; i < openArray.length; i++) {
					second = second + 0.1
					openArray[i].setAttribute('data-wow-delay', second + 's');
				}
				//숨겨진 아이콘
				var hSecond = 0;
				$(".load").click(function (e) {
					e.preventDefault();
					for (var i = 0; i < hiddenArray.length; i++) {
						hSecond = hSecond + 0.1;
						hiddenArray[i].setAttribute('data-wow-delay', hSecond + 's');
						hiddenArray[i].style.display = 'block';
						if ($(".customer_list:hidden").length == 0) {
							$(".load").hide();
						}
					};
				});
				window.scrollTo(0, window.pageYOffset + 1);
				window.scrollTo(0, window.pageYOffset - 1);
			})
		}
		function preventClick(e){
			e.preventDefault()
		}