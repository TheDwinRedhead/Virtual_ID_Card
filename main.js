const linksSocialMedia = {
  github: 'TheDwinRedhead',
  facebook: 'Davi.Kunzendorff',
  instagram: 'kunzendorff_davi',
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGit.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login

    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()
