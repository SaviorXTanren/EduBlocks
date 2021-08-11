export default function define(Python: Blockly.BlockGenerators) {
	Python['minecraft_block_getblock'] = function(block) {
	  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
	  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
	  var value_z = Blockly.Python.valueToCode(block, 'Z', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = "mc.getBlock(" + value_x + ", " + value_y + ", " + value_z + ")";
	  // TODO: Change ORDER_NONE to the correct strength.
	  return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Python['minecraft_block_setblock'] = function(block) {
	  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
	  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
	  var value_z = Blockly.Python.valueToCode(block, 'Z', Blockly.Python.ORDER_ATOMIC);
	  var value_block_id = Blockly.Python.valueToCode(block, 'Block ID', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = "mc.setBlock(" + value_x + ", " + value_y + ", " + value_z + ", " + value_block_id + ")\n";
	  return code;
	};

	Python['minecraft_block_setblocks'] = function(block) {
	  var value_start_x = Blockly.Python.valueToCode(block, 'Start X', Blockly.Python.ORDER_ATOMIC);
	  var value_start_y = Blockly.Python.valueToCode(block, 'Start Y', Blockly.Python.ORDER_ATOMIC);
	  var value_start_z = Blockly.Python.valueToCode(block, 'Start Z', Blockly.Python.ORDER_ATOMIC);
	  var value_end_x = Blockly.Python.valueToCode(block, 'End X', Blockly.Python.ORDER_ATOMIC);
	  var value_end_y = Blockly.Python.valueToCode(block, 'End Y', Blockly.Python.ORDER_ATOMIC);
	  var value_end_z = Blockly.Python.valueToCode(block, 'End Z', Blockly.Python.ORDER_ATOMIC);
	  var value_block_id = Blockly.Python.valueToCode(block, 'Block ID', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = "mc.setBlocks(" + value_start_x + ", " + value_start_y + ", " + value_start_z + ", " + value_end_x + ", " + value_end_x + ", " + value_end_z + ", " + value_block_id + ")\n";
	  return code;
	};

	Python['minecraft_chat_posttochat'] = function(block) {
	  var value_message = Blockly.Python.valueToCode(block, 'Message', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = "mc.postToChat(" + value_message + ")\n";
	  return code;
	};

	Python['minecraft_connect'] = function(block) {
	  var value_address = Blockly.Python.valueToCode(block, 'Address', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = "from mcpi.minecraft import Minecraft\nmc = Minecraft.create(" + value_address + ")\n";
	  return code;
	};

	Python['minecraft_player_gettilepos'] = function(block) {
	  var dropdown_coordinate = block.getFieldValue('Coordinate');
	  // TODO: Assemble Python into code variable.
	  var code = "";
	  if (dropdown_coordinate === "X")
	  {
		  var code = "mc.player.getTilePos().x";
	  }
	  else if (dropdown_coordinate === "Y")
	  {
		  var code = "mc.player.getTilePos().y";
	  }
	  else if (dropdown_coordinate === "Z")
	  {
		  var code = "mc.player.getTilePos().z";
	  }
	  
	  // TODO: Change ORDER_NONE to the correct strength.
	  return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Python['minecraft_player_settilepos'] = function(block) {
	  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
	  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
	  var value_z = Blockly.Python.valueToCode(block, 'Z', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = "mc.player.setTilePos(" + value_x + ", " + value_y + ", " + value_z + ")\n";
	  return code;
	};
}
