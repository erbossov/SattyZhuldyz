window.onload = (function() {
  var acc = document.querySelectorAll(".accordion-item");
  var acc2 = document.querySelectorAll(".f-accordion");
  
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      if (this.children[1].style.display === "block") {
        this.children[1].style.display = "none";
        this.classList.remove('reverse')
      } else {
        this.children[1].style.display = "block";
        this.classList.add('reverse')
      }
      closeAll(acc, i)
    });
  }

  for (let i = 0; i < acc2.length; i++) {
    acc2[i].addEventListener("click", function() {
      if (this.children[1].style.display === "block") {
        this.children[1].style.display = "none";
        this.classList.remove('reverse')
      } else {
        this.children[1].style.display = "block";
        this.classList.add('reverse')
      }
      closeAll(acc2, i)
    });
  }

  function closeAll(array, exp) {
    for (var i = 0; i < array.length; i++) {
      if (i != exp) {
        array[i].children[1].style.display = "none";
        array[i].classList.remove('reverse')
      }
    }
  }
})

function toggleTicketType(element, flag) {
  let btns = document.querySelectorAll('.ticket_btn')
  btns[0].classList.remove('active-mid-btn')
  btns[1].classList.remove('active-mid-btn')
  element.classList.add('active-mid-btn')
  let hide = document.querySelectorAll('.show-paper-ticket')
  for (let i = 0; i < hide.length; i++) {
    const element = hide[i];
    if (flag) {
      element.style.display = "flex"
    } else {
      element.style.display = "none"
    }
  }
}