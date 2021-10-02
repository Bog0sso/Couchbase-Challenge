const express=require('express');
const router=express.Router();
const vehiculesController=require('../controllers/vehiculesController');

// router.get('/',vehiculesController.getAllVehicules);
router.get('/:id',vehiculesController.getVehicule_Id);

router.post('/',vehiculesController.createVehicule);

// router.put('/:id',vehiculesController.editVehicule_Id);

// router.delete('/:id',vehiculesController.deleteVehicule_Id)

module.exports=router;