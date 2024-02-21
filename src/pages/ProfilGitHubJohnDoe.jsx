import React, { useState, useEffect } from "react";

const GitHubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [gists, setGists] = useState([]);
  const [starred, setStarred] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [orgas, setOrgas] = useState([]);
  const [receivedevents, setReceivedevents] = useState([]);

  const fetchGitHubProfile = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/github-john-doe",
      );

      const data = await response.json();
      setProfile(data);

      // Ouvre le profil GitHub dans un nouvel onglet une fois les données récupérées
      if (data) {
        openProfileInNewTab();
      }
    } catch (error) {
      console.error("Error fetching GitHub profile:", error.message);
    }
  };

  const openProfileInNewTab = () => {
    if (profile) {
      const content = generateProfileContent(); // Génère le contenu spécifique du profil
      const blob = new Blob([content], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      // Ouvre le nouvel onglet avec le contenu spécifique du profil
      window.open(url, "_blank");
    }
  };

  const getFollowers = async () => {
    const response = await fetch(
      "https://api.github.com/users/github-john-doe/followers",
    );
    const json = await response.json();
    setFollowers(json);
  };

  const getFollowing = async () => {
    const responseFollowing = await fetch(
      "https://api.github.com/users/github-john-doe/following",
    );
    const jsonFollowing = await responseFollowing.json();
    setFollowing(jsonFollowing);
  };

  const getGists = async () => {
    const responseGists = await fetch(
      "https://api.github.com/users/github-john-doe/gists",
    );
    const jsonGists = await responseGists.json();
    console.log("Gists", jsonGists);
    setGists(jsonGists);
  };

  const getStarred = async () => {
    const responseStarred = await fetch(
      "https://api.github.com/users/github-john-doe/starred",
    );
    const jsonStarred = await responseStarred.json();
    setStarred(jsonStarred);
  };

  const getSubscriptions = async () => {
    const responseSubscriptions = await fetch(
      "https://api.github.com/users/github-john-doe/subscriptions",
    );
    const jsonSubscription = await responseSubscriptions.json();
    setSubscriptions(jsonSubscription);
  };

  const getRepos = async () => {
    const responseRepos = await fetch(
      "https://api.github.com/users/github-john-doe/repos",
    );
    const jsonRepos = await responseRepos.json();
    setRepos(jsonRepos);
  };

  const getEvents = async () => {
    const responseEvents = await fetch(
      "https://api.github.com/users/github-john-doe/events",
    );
    const jsonEvents = await responseEvents.json();
    setEvents(jsonEvents);
  };

  const getOrgas = async () => {
    const responseOrgas = await fetch(
      "https://api.github.com/users/github-john-doe/orgs",
    );
    const jsonOrgas = await responseOrgas.json();
    setOrgas(jsonOrgas);
  };

  const getReceivedevents = async () => {
    const responseReceivedevents = await fetch(
      "https://api.github.com/users/github-john-doe/received_events",
    );
    const jsonReceivedevents = await responseReceivedevents.json();
    setReceivedevents(jsonReceivedevents);
  };

  const generateProfileContent = () => {
    // Génère le contenu spécifique du profil
    const followersContent = followers
      .map((follower) => `<li>${follower.login}</li>`)
      .join("");
    const followingContent = following
      .map((user) => `<li>${user.login}</li>`)
      .join("");
    const gistsContent = gists.map((gist) => `<li>${gist.id}</li>`).join("");
    const starredContent = starred
      .map((star) => `<li>${star.description}</li> `)
      .join("");
    const subscriptionsContent = subscriptions
      .map((subscription) => `<li>${subscription.name}</li> `)
      .join("");
    const reposContent = repos.map((repo) => `<li>${repo.name}</li> `).join("");
    const eventsContent = events
      .map((event) => `<li>${event.name}</li> `)
      .join("");
    const orgasContent = orgas.map((orga) => `<li>${orga.name}</li> `).join("");
    const receivedeventsContent = receivedevents
      .map((receivedevent) => `<li>${receivedevent.name}</li> `)
      .join("");

    return `
        <div>
            <h1>${profile.login}</h1>
            <p>Mon ID est : ${profile.id}
            <br></br>
            Voici egalement mon node id : ${profile.node_id}</p>
            <img src="${profile.avatar_url}" alt="GitHub Avatar" style="width: 100px; border-radius: 50%;" />
            <h3>${profile.name}</h3>
            <p>${profile.bio}</p>
            <p>Pour acceder à mon profil GitHub c'est ici : <a href="https://github.com/github-john-doe"> ${profile.html_url} </a></p>
            <p>Voici la liste des personnes qui me suivent : ${profile.followers} </p>
            <ul>
            ${followersContent}
           </ul>
           <p>Je n'ai pas actuellement pas de personnes qui me suivent en retour : ${profile.following}</p>
           <ul>
           ${followingContent}
           </ul>
            <p>Mon profil a ete cree le ${profile.created_at}</p>
            <p>Mon profil a ete mis à jour le ${profile.updated_at}</p>
            <p>Gists : ${profile.public_gists}</p>
            <ul>${gistsContent}</ul>
            <p>Voici mes favoris : </p>
            <ul>${starredContent}</ul>
            <p>Voici mes souscriptions : </p>
            <ul>${subscriptionsContent}</ul>
            <p>Voici mes repos : ${profile.public_repos}</p>
            <ul>${reposContent}</ul>
            <ul>${eventsContent}</ul>
            <ul>${orgasContent}</ul>
            <ul>${receivedeventsContent}</ul>
          <!-- Ajoutez plus de champs au besoin -->
        </div>
      `;
  };

  useEffect(() => {
    getFollowers();
    fetchGitHubProfile();
    getFollowing();
    getGists();
    getStarred();
    getSubscriptions();
    getRepos();
    getEvents();
    getOrgas();
    getReceivedevents();
  }, []);

  return (
    <div>
      <button id="BtnGitHub" onClick={fetchGitHubProfile}></button>
    </div>
  );
};

export default GitHubProfile;
