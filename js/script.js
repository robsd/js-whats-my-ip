main = document.getElementById('main');
error = document.getElementById('error');

ip = document.getElementById('ip');
hostname = document.getElementById('hostname');
isp = document.getElementById('isp');
city = document.getElementById('city');
region = document.getElementById('region');
country = document.getElementById('country');

request = new XMLHttpRequest();
request.onreadystatechange = function() {
	if (this.readyState == 4) {
		if (this.status == 200) {
			response = JSON.parse(this.responseText);

			ip.innerHTML = response['ip'];
			hostname.innerHTML = response['hostname'];
			isp.innerHTML = response['org'];
			city.innerHTML = response['city'];
			region.innerHTML = response['region'];
			country.innerHTML = response['country'];

			error.classList.value = 'd-none';
			main.classList.value = 'text-center';
		}
		else {
			main.classList.value = 'd-none';
			error.classList.value = 'alert alert-danger mb-5';
			error.innerHTML = 'Something went wrong.';
		}
	}
};
request.open('GET', 'https://ipinfo.io/json');
request.send();
