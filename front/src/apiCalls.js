import Cookies from "universal-cookie";

export const getApiRequest = async (endpoint) => {
  try {
    const response = await fetch(`http://localhost:4000${endpoint}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postApiRequest = async (formData, endpoint) => {
  try {
    const response = await fetch(`http://localhost:4000${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const userRequest = async (endpoint) => {
  const cookies = new Cookies();
  const token = cookies.get("access_token");
  try {
    const response = await fetch(`http://localhost:4000${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const checkIsTokenValid = async () => {
  const cookies = new Cookies();
  const token = cookies.get("access_token");
  try {
    const response = await fetch("http://localhost:4000/user/checkToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
