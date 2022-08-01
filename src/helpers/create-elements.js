const ipInfo = document.getElementById('IP');
const ipLocation = document.getElementById('location');
const ipTimezone = document.getElementById('timezone');
const ipIsp = document.getElementById('isp');

export function fillInfo(obj) {
    const {region, country, timezone} = obj.location
    ipInfo.innerText = obj.ip;
    ipLocation.innerText = `${country} ${region}`;
    ipTimezone.innerText = timezone;
    ipIsp.innerText = obj.isp;
}