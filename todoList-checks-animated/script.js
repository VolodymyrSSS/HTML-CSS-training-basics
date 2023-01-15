// couldn't quite figure out how to re-instantiate the image each time with pure css,
// so here's some javascript instead
const checks = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < checks.length; i++) {
  checks[i].addEventListener('input', (event) => {
    const style = document.querySelectorAll('.checkmark')[i].style;
    if (checks[i].checked) {
      //random svg id makes the image reinstantiate each time
      const bgImg = `url("data:image/svg+xml,%3Csvg id='svg${
        Math.floor(Math.random() * (10000 - 1 + 1)) + 1
      }' height='100%25' width='100%25' xmlns='http://www.w3.org/2000/svg' viewbox='0 0 25 25'%3E%3Cpath d='M 4 12.5 Q 6.6 15.2 9.2 17.8 Q 14.5 9.9 22.4 4.6' stroke-dasharray='26.212703704833984' stroke-width='6' fill='none' stroke='rgb(225, 101, 78)'%3E%3Canimate attributeName='stroke-dashoffset' values='26.212703704833984;0' dur='400ms' calcMode='linear' repeatCount='0' /%3E%3C/path%3E%3C/svg%3E")`;
      style.setProperty(`background-image`, bgImg);
    } else {
      const bgImg = `url("data:image/svg+xml,%3Csvg id='svg${
        Math.floor(Math.random() * (10000 - 1 + 1)) + 1
      }' height='100%25' width='100%25' xmlns='http://www.w3.org/2000/svg' viewbox='0 0 25 25'%3E%3Cpath d='M 4 12.5 Q 6.6 15.2 9.2 17.8 Q 14.5 9.9 22.4 4.6' stroke-dasharray='26.212703704833984' stroke-width='6' fill='none' stroke='%23f00'%3E%3Canimate attributeName='stroke-dashoffset' values='0;26.212703704833984' dur='200ms' calcMode='linear' repeatCount='0' fill='freeze' /%3E%3C/path%3E%3C/svg%3E")`;
      style.setProperty(`background-image`, bgImg);
    }
  });
}
