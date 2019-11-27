import "whatwg-fetch";

export const ServiceStatus = {
  checkStatus: (res: any) => {
    if (res.status !== 200) {
      console.log("res", res);
      location.href = "/erreur";
    }
  },
};
const api = {
  getJSON: (url: string) => {
    return fetch(url, {
      credentials: "same-origin",
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then(res => {
      ServiceStatus.checkStatus(res);
      return res;
    });
  },
  postJSON: (url: string, JSONbody: any) => {
    return fetch(url, {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONbody,
    }).then(res => {
      ServiceStatus.checkStatus(res);
      return res;
    });
  },
  putJSON: (url: string, JSONbody: any) => {
    return fetch(url, {
      credentials: "same-origin",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
        // "X-XSRF-TOKEN": token,
        Authorization: AUTH_TYPE + " " + getToken(),
      },
      body: JSONbody,
    }).then(res => {
      ServiceStatus.checkStatus(res);
      return res;
    });
  },
  deleteJSON: (url: string) => {
    return fetch(url, {
      credentials: "same-origin",
      method: "DELETE",
      headers: {
        Accept: "application/json",
        // "X-XSRF-TOKEN": token,
        Authorization: AUTH_TYPE + " " + getToken(),
      },
    }).then(res => {
      ServiceStatus.checkStatus(res);
      return res;
    });
  },
};

export default api;
