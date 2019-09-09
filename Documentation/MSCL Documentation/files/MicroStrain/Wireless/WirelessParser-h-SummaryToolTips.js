NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/WirelessParser.h",{5200:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5200\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessParser</div></div></div><div class=\"TTSummary\">Parses all wireless data and stores it in a corresponding container</div></div>",5209:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5209\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">WirelessPacketCollector&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packetCollector,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName last\">responseCollector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor for WirelessParser</div></div>",5211:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a map of &lt;DuplicateCheckKey&gt;s to a timestamp or tick value to check for packet duplication</div></div>",5213:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5213\" class=\"NDPrototype NoParameterForm\">WirelessPacketCollector&amp; m_packetCollector</div><div class=\"TTSummary\">The WirelessPacketCollector associated with this parser and it\'s parent base station</div></div>",5214:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5214\" class=\"NDPrototype NoParameterForm\">std::weak_ptr&lt;ResponseCollector&gt; m_responseCollector</div><div class=\"TTSummary\">The ResponseCollector associated with this parser and it\'s parent base station</div></div>",5215:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5215\" class=\"NDPrototype NoParameterForm\">DuplicateCheckMap m_lastPacketMap</div><div class=\"TTSummary\">A DuplicateCheckMap containing node addresses and their uniqueId values</div></div>",5217:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5217\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> processPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">lastReadPos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a WirelessPacket, adds it to the data container if it is a data packet, or adds it to the appropriate handler depending on the packet type</div></div>",5218:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5218\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> findMatchingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer of bytes and checks if the packet collector has any responses it is waiting on.&nbsp; If it does, and the bytes match the expected response, the bytes are &quot;given&quot; to the packet collector and the read position is moved.</div></div>",5219:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5219\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> findMatchingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">lastReadPos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a WirelessPacket and checks if the packet collector has any responses it is waiting on.&nbsp; If it does, and the packet matches the expected response, the packet is &quot;given&quot; to the packet collector.</div></div>",5220:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5220\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> isDuplicate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the passed in packet is a duplicate of the previous packet that came in.</div></div>",5221:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5221\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessParser::ParsePacketResult parseAsPacket_ASPP_v1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid ASPP v1 packet.</div></div>",5222:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5222\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessParser::ParsePacketResult parseAsPacket_ASPP_v2(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid ASPP v2 packet.</div></div>",5223:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5223\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessParser::ParsePacketResult parseAsPacket_ASPP_v3(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid ASPP v3 packet.</div></div>",5224:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5224\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessParser::ParsePacketResult parseAsPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid ASPP v1 or v2 packet.</div></div>",5225:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5225\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> findPacketInBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks for packets after the current bytes buffer\'s read position (starting at the next byte, not the current one).&nbsp; If a packet is found, the packet is processed and the byte buffer\'s read position is moved.&nbsp; If a packet is not found, nothing changes in the byte buffer</div></div>",5226:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5226\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer and finds the next ASPP Wireless Packet, or the next command response that is expected by the base station.</div></div>",5227:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5227\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const bool operator</span> &lt; (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">const WirelessParser::DuplicateCheckKey&amp; key1,&nbsp;</td></tr><tr><td class=\"PName first last\">const WirelessParser::DuplicateCheckKey&amp; key2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Less than operator for &lt;WirelessPareser::DuplicateCheckKey&gt; so that it can be used in a map.</div></div>"});