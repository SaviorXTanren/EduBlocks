export default function define(Blocks: Blockly.BlockDefinitions) {
	let minecraft_col = "#28CF2F"

	Blocks['minecraft_block_getblock'] = {
	  init: function() {
		this.appendDummyInput()
			.appendField("Minecraft - Get Block:");
		this.appendValueInput("X")
			.setCheck("Number")
			.appendField("X");
		this.appendValueInput("Y")
			.setCheck("Number")
			.appendField("Y");
		this.appendValueInput("Z")
			.setCheck("Number")
			.appendField("Z");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour('#28CF2F');
	 this.setTooltip("Gets the ID of the block at the X, Y, Z coordinates");
	 this.setHelpUrl("");
	  }
	};

	Blocks['minecraft_block_setblock'] = {
	  init: function() {
		this.appendDummyInput()
			.appendField("Minecraft - Set Block:");
		this.appendValueInput("X")
			.setCheck("Number")
			.appendField("X");
		this.appendValueInput("Y")
			.setCheck("Number")
			.appendField("Y");
		this.appendValueInput("Z")
			.setCheck("Number")
			.appendField("Z");
		this.appendValueInput("Block ID")
			.setCheck("Number")
			.appendField("Block ID");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#28CF2F');
	 this.setTooltip("Set the block at X, Y, Z coordinates");
	 this.setHelpUrl("");
	  }
	};

	Blocks['minecraft_block_setblocks'] = {
	  init: function() {
		this.appendDummyInput()
			.appendField("Minecraft - Set Blocks:");
		this.appendValueInput("Start X")
			.setCheck("Number")
			.appendField("Start X");
		this.appendValueInput("Start Y")
			.setCheck("Number")
			.appendField("Start Y");
		this.appendValueInput("Start Z")
			.setCheck("Number")
			.appendField("Start Z");
		this.appendValueInput("End X")
			.setCheck("Number")
			.appendField("End X");
		this.appendValueInput("End Y")
			.setCheck("Number")
			.appendField("End Y");
		this.appendValueInput("End Z")
			.setCheck("Number")
			.appendField("End Z");
		this.appendValueInput("Block ID")
			.setCheck("Number")
			.appendField("Block ID");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#28CF2F');
	 this.setTooltip("Sets multiple blocks at the X, Y, Z coordinates");
	 this.setHelpUrl("");
	  }
	};
	
	Blocks['minecraft_chat_posttochat'] = {
	  init: function() {
		this.appendDummyInput()
			.appendField("Minecraft - Send Message:");
		this.appendValueInput("Message")
			.setCheck("String")
			.appendField("");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#28CF2F');
	 this.setTooltip("Sends a message to Minecraft chat");
	 this.setHelpUrl("");
	  }
	};

	Blocks['minecraft_connect'] = {
	  init: function() {
		this.appendDummyInput()
			.appendField("Minecraft - Connect To Server:");
		this.appendValueInput("Address")
			.setCheck("String")
			.appendField("");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#28CF2F');
	 this.setTooltip("The URL of the Minecraft server to connect to");
	 this.setHelpUrl("");
	  }
	};

	Blocks['minecraft_player_gettilepos'] = {
	  init: function() {
		this.appendDummyInput()
			.appendField("Minecraft - Get Player Position:");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"], ["Z","Z"]]), "Coordinate");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour('#28CF2F');
	 this.setTooltip("Get the player's X, Y, or Z position");
	 this.setHelpUrl("");
	  }
	};

	Blocks['minecraft_player_settilepos'] = {
	  init: function() {
		this.appendDummyInput()
			.appendField("Minecraft - Set Player Position:");
		this.appendValueInput("X")
			.setCheck("Number")
			.appendField("X");
		this.appendValueInput("Y")
			.setCheck("Number")
			.appendField("Y");
		this.appendValueInput("Z")
			.setCheck("Number")
			.appendField("Z");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#28CF2F');
	 this.setTooltip("Set the X, Y, Z position of a player");
	 this.setHelpUrl("");
	  }
	};
}
 
