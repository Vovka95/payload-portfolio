import type { Access } from 'payload'

export const canManageHome: Access = ({ req: { user } }) => {
  return Boolean(user)
}

export const canReadHome: Access = () => true
