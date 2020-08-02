const baseUrl = process.env.REACT_APP_APIURL;

export async function get(relativeUrl) {
  const response = await fetch(`${baseUrl}${relativeUrl}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw new Error(response.statusText);
}

export async function post(relativeUrl, body) {
  const response = await fetch(`${baseUrl}${relativeUrl}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw new Error(response.statusText);
}
