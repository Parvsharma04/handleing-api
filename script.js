const container = document.getElementById('container')
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.gap = '1rem'
async function getData(){
  try {
    const response = await fetch('https://reqres.in/api/users?page=2')
    const data = await response.json();
    console.log(data.data)
    return data.data;
  } catch (error) {
    console.log(error)
    return null;
  }
}

function showItem(item){
  const itemInfo = document.createElement('div')
  const image = document.createElement('img')
  const name = document.createElement('p')
  const email = document.createElement('p')

  image.src = item.avatar;
  name.innerText = item.first_name;
  email.innerText = item.email;

  itemInfo.append(name)
  itemInfo.append(email)
  itemInfo.append(image)
  
  container.append(itemInfo)
}


async function render() {
  let data = await getData()  
  if(data != null){
    data.forEach(element => {
      showItem(element);      
    });
  }
}

render()
