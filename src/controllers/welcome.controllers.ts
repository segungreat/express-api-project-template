import {Request as Req, Response as Res, NextFunction as NFunc} from "express";
import { CustomSuccessRes } from "../handlers/success";
import {prisma} from "../database/db";

export const welcome = async function (req: Req, res: Res) {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      // posts: {
      //   create: {
      //     title: 'Hello World',
      //     content: 'This is my first post!',
      //     published: true,
      //   },
      // },
    },
    // include: {
    //   posts: true,
    // },
  })
  console.log('Created user:', user)

  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany({
    // include: {
    //   posts: true,
    // },
  })
  console.log('All users:', JSON.stringify(allUsers, null, 2))

  return CustomSuccessRes.Success(res, 'Welcome to express project template', allUsers);
  // return res.json('Welcome to express project template');
}

export const login = async function (req: Req, res: Res) {

  return CustomSuccessRes.Success(res, 'This should be testinge', {});
  // return res.json('Welcome to express project template');
}
