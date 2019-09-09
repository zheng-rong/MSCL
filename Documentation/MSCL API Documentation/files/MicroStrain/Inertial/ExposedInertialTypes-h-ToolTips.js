NDContentPage.OnToolTipsLoaded({172:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enum for the different data descriptors.</div></div>",272:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent the different available options and combinations for the Adaptive Measurement commands (0x0D, 0x44-0x46)</div></div>",274:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of uint16 PRN#s for satellites.</div></div>",278:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype278\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Matrix_3x3(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i00,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i01,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i02,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i10,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i11,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i12,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i20,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i21,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i22</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Matrix object.</div></div>",283:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype283\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GeometricVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">x_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">y_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">z_init</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GeometricVector object.</div></div>",290:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Defines a latitude, longitude, and altitude.</div></div>",317:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype317\" class=\"NDPrototype NoParameterForm\">SatellitePRNs satellitePRNs</div><div class=\"TTSummary\">The SatellitePRNs for all included satellites.</div></div>",319:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the satellite constellation data used in the ConstellationSettingsData class.</div></div>",326:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the InertialNode::setConstellationSettings API call.</div></div>",331:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enum for the different data descriptors.</div></div>",332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype332\" class=\"NDPrototype NoParameterForm\">AdvancedLowPassFilterData() : dataDescriptor(mscl::MipTypes::ChannelField::CH_FIELD_SENSOR_SCALED_ACCEL_VEC), manualFilterBandwidthConfig(SET_TO_HALF_REPORTING_RATE), applyLowPassFilter(<span class=\"SHKeyword\">true</span>), cutoffFrequency(<span class=\"SHNumber\">0</span>)</div></div>",347:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the 1PPS Pulse info for DeviceStatusData.</div></div>",351:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains stream info for DeviceStatusData.</div></div>",360:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains USB or COM port info for DeviceStatusData.</div></div>",366:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains internal temperature info for DeviceStatusData.</div></div>",371:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype371\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeviceStatusData</div></div></div><div class=\"TTSummary\">Contains the data needed by the InertialNode::getBasicDeviceStatus method.</div></div>",372:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the two different types of statuses returned by DeviceStatus.</div></div>",375:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Enum of available system states.</div></div>",415:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the possible sources of aiding heading updates to the Kalman filter.&nbsp; Some, all, or none of the options can be set as heading aids.</div></div>",450:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Indicates the bit value used to enable/disable data conditioning features</div></div>",451:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Indicates the magnetometer bandwidth and power consumption settings</div></div>",465:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Indicates the bit value used to enable/disable available measurement options</div></div>",501:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP Channel Field IDs.</div></div>",700:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype700\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setConstellationSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConstellationSettingsData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the GNSS Constellation Settings.</div></div>",717:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype717\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setAdvancedLowPassFilterSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">AdvancedLowPassFilterConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the advanced low-pass filter settings.</div></div>",719:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype719\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setComplementaryFilterSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ComplementaryFilterData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the complementary filter settings.</div></div>",721:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype721\" class=\"NDPrototype NoParameterForm\">DeviceStatusData getBasicDeviceStatus()</div><div class=\"TTSummary\">Gets the basic device status.</div></div>",730:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype730\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sendExternalGNSSUpdate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ExternalGNSSUpdateData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">gnssUpdateData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">sends the external GNSS update command.</div></div>",2568:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a 1-byte unsigned integer.</div></div>",2569:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a 2-byte unsigned integer.</div></div>"});