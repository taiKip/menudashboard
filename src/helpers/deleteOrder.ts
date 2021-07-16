export const deletOrder = async (url: string, id: string) => {
  const res = await fetch(url + id + ".json", {
    method: "DELETE",
  });
  return res.json();
};
