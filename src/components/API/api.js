export const apiAccess = () => {

const API = 'https://thronesapi.com/api/v2/Characters'

return fetch(API)
    .then(res => res.json())
}
