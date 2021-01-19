// ANCHOR -- Require Modules --
const Member = require("./../models/memberModel");

// ANCHOR -- Get All Members --
exports.getAllMembers = async (req, res) => {
  // 1) save all members to local var
  const members = await Member.find();

  // 2) return the members
  res.status(200).json({
    status: "success",
    members: members,
  });
};
