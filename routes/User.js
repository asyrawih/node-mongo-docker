const express = require("express");

const router = express.Router();

const User = require("../model/User");
// =============================================================================
// tampilkan Semua Data
// return : void
// =============================================================================
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    return res.json(user);
  } catch (error) {
    return res.json({ error: error });
  }
});

/**
 * ========================================================================
 * Save Data ke Server Atau Database
 * ========================================================================
 * @param nama
 * @param alamat
 * @method Post
 * @callback async
 * @requires [NAMA]
 * @requires [Alamat]
 * @returns JSON
 */
router.post("/", async (req, res) => {
  try {
    const user = new User({
      nama: req.body.nama,
      alamat: req.body.alamat
    });
    const saveUser = await user.save();
    const resJson = saveUser.toJSON();
    return res.status(201).json(resJson)
  } catch (error) {
    return res.json({ pesan: error.errors });
  }
});

// =============================================================================
// Ambil Data Berdasarkan ID
// =============================================================================
/**
 * @param userId ,
 * @method GET
 * @returns JSON
 */
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.userId });
    return res.json(user);
  } catch (error) {
    return res.json({
      status: false,
      pesan: "data tidak di temukan",
      error: error
    });
  }
});
/**
 *  ========================================================================== 
 *  Update Data 
 * @param userId , 
 * @requires nama|alamat
 * @returns JSON|201
 *  ==========================================================================
 */
router.patch("/:userId", async (req, res) => {
  try {
    const user = await User.updateOne(
      { _id: req.params.userId },
      {
        nama: req.body.nama,
        alamat: req.body.alamat
      }
    );
    return res.status(201).json({
        status : true , 
        pesan : 'berhasil di update'
    })
  } catch (error) {
    return res.json({ pesan: error });
  }
});

/**
 * @method DELETE
 * @param USERID
 * @returns JSON
 * @requires USERID
 */
// =============================================================================
// Hapus Data
// =============================================================================
router.delete("/:userId", async (req, res) => {
  const user = await User.remove({ _id: req.params.userId });
  return res.json({ pesan: "Data berhasil Di Hapus" });
});

module.exports = router;
