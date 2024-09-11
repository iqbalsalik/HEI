// Get the modal and link elements
var modal = document.getElementById('privacy-policy-modal');
var link = document.getElementById('privacy-policy-link');
const close = document.querySelector(".close");

// When the link is clicked, open the modal
link.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
close.addEventListener("click",()=>{
    modal.style.display = 'none' ;
})

// <!-- contact form mail at mailing id
document.getElementById('submitBtn').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var text = document.getElementById('text').value;
    var company = document.getElementById("CompanyName").value;
    var checkbox = document.querySelector('input[type="checkbox"]');


    if (name && number && email && text && company && checkbox.checked) {
      var subject = 'Request A Quote';
      var body = "Company: " + company + '\n' +'Additional Details:\n\n' + text + '\n\nBest Regards,\n' + name + '\n' + number;
      var mailtoLink = 'mailto:heipowerindia@gmail.com' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailtoLink;
    } else {
      alert('Please fill in all the fields.');
    }
  });