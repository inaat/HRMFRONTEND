const user = JSON.parse(localStorage.getItem("user"));

export function canView(page) {
  console.log(user);
  // return user.permissions.some((p) => p === `view_${page}`);
}
export function canEdit(page) {
  return user.permissions.some((p) => p === `edit_${page}`);
}
export function canDelete(page) {
  return user.permissions.some((p) => p === `edit_${page}`);
}
