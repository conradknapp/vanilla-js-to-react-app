const Card = ({ avatar_url, html_url, login, public_repos, bio }) => `
    <li>
      <img src="${avatar_url}" style="height: 70px" />
      <a href="${html_url}">
        <h3>${login}</h3>
      </a>
      <p>Public Repos: <strong>${public_repos}</strong></p>
      <p>${bio ? `Bio: ${bio}` : ""}</p>
    </li>
  `;

export default Card;
