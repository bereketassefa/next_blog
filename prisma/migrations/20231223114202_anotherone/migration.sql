/*
  Warnings:

  - You are about to drop the `_BlogToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BlogToUser" DROP CONSTRAINT "_BlogToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BlogToUser" DROP CONSTRAINT "_BlogToUser_B_fkey";

-- DropTable
DROP TABLE "_BlogToUser";
