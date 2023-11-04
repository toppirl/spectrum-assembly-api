console.log('hi')

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
  console.log('clicked')
  const name = document.querySelector('input').value
  try {
    const response = await fetch(
      `https://spectrum-assembly-api.onrender.com/api/${name}`
    )
    const data = await response.json()
    document.querySelector('h2').innerText = data.email
  } catch (error) {
    console.log(error)
  }
}
