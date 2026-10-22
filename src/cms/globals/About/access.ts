import type { Access } from 'payload'

export const canManageAbout: Access = ({ req: { user } }) => {
  return Boolean(user)
}

export const canReadAbout: Access = () => true
