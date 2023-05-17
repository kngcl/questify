import { httpClient } from './axios';

export function register(name, emailAddress, password) {
  return httpClient.post('users', name, emailAddress, password);
}

export function getMembers(member) {
  return httpClient.get('users', member);
}

export function login(emailAddress, password) {
  return httpClient.post('users/login', { emailAddress, password });
}

export function invitations(email) {
  return httpClient.post('notifications', email);
}

export function getInvitee(token) {
  return httpClient.get(`/notifications/verify`, { params: { token } });
}

export async function getCurrentUser() {
  const { data } = await httpClient.get('users/current-user');
  return data;
}

export async function getCurrentUsers() {
  const { data } = await httpClient.get('users');
  return data;
}

export function saveProject(title) {
  return httpClient.post('projects', title);
}

/* export function saveColumns(title) {
  return httpClient.post('states', title);
} */

export function saveColumn(title) {
  return httpClient.post('states', title);
}

export async function getColumns() {
  const { data } = await httpClient.get('states');
  return data.length > 0
    ? data
    : [
        {
          db_id: null,
          id: Date.now(),
          title: 'TODO',
          cards: [],
        },
      ];
}

export function deleteColumn(id) {
  return httpClient.delete(`states/${id}`);
}

export function confirmUser(token) {
  return httpClient.post('/notifications/confirm', { token });
}
