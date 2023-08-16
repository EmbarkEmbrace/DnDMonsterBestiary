//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value.split(" ").join("-").toLowerCase()
  console.log(choice)
  const url = `https://www.dnd5eapi.co/api/monsters/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.name)
        const monsterName = data.name
        document.querySelector('.name').innerText = data.name
        console.log(data.desc)
        const monsterDesc = data.desc
        if (data.desc === undefined){
          document.querySelector('.desc').innerText = "For some reason, this data does not exist.."
        } else {
          document.querySelector('.desc').innerText = data.desc
        }
        // if (data.desc === undefined){
        //   document.querySelector('.rowDesc').remove()
        // } else {
        //   document.querySelector('.desc').innerText = data.desc
        // } 
        console.log(data.size)
        const monsterSize = data.size
        document.querySelector('.size').innerText = data.size
        console.log(data.type)
        const monsterType = data.type
        document.querySelector('.type').innerText = data.type
        console.log(data.alignment)
        const monsterAlignment = data.alignment
        document.querySelector('.alignment').innerText = data.alignment
        console.log(data.hit_points)
        const monsterHitPoints = data.hit_points
        document.querySelector('.hitpoints').innerText = data.hit_points
        //Needs work. Append multiple lis.
        console.log(data.armor_class[0])
        data.armor_class.forEach(obj => {
          const ul = document.querySelector('ul');
          ul.innerHTML = ''
          const li = document.createElement('li')
          li.textContent = obj.value
          document.querySelector('ul').appendChild(li)
        });
        console.log(data.strength)
        const monsterStrength = data.strength
        document.querySelector('.strength').innerText = data.strength
        console.log(data.dexterity)
        const monsterDexterity = data.dexterity
        document.querySelector('.dexterity').innerText = data.dexterity
        console.log(data.constitution)
        const monsterConstitution = data.constitution
        document.querySelector('.constitution').innerText = data.constitution
        console.log(data.intelligence)
        const monsterIntelligence = data.intelligence
        document.querySelector('.intelligence').innerText = data.intelligence
        console.log(data.wisdom)
        const monsterWisdom = data.wisdom
        document.querySelector('.wisdom').innerText = data.wisdom
        console.log(data.charisma)
        const monsterCharisma = data.charisma
        document.querySelector('.charisma').innerText = data.charisma
        })

      .catch(err => {
          console.log(`error ${err}`)
      });
}