import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/env.js';

const user = {
    id: 2,
    name: "jhon",
    role: "admin",
    department: "IT",
    accessLevel: 4
}

const token = jwt.sign(user, jwtSecret, {expiresIn: "1h"});

console.log(`JWT token for ${user.role}: ${token}`)