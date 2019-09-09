NDSummary.OnToolTipsLoaded("CClass:SampleRate",{2436:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2436\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",2441:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2441\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">RateType&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">samples</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a sample rate with the given type and samples</div></div>",2442:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2442\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the string representation of the sample rate.&nbsp; Ex. 1Hz = &quot;1-hertz&quot;, 10kHz = &quot;10000-hertz&quot;, 1 per 10 seconds = &quot;10-seconds&quot;, 1 per 1 minute = &quot;60 seconds&quot;</div></div>",2443:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2443\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> prettyStr() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the string representation of the sample rate in a more human-readable format.&nbsp; Ex. 1Hz = &quot;1Hz&quot;, 10kHz = &quot;10kHz&quot;, 1 per 10 seconds = &quot;Every 10 sec&quot;, 1 per 1 minute = &quot;Every 1 min&quot;</div></div>",2444:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2444\" class=\"NDPrototype NoParameterForm\">TimeSpan samplePeriod() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sample period (time between samples) as a TimeSpan for the current sample rate</div></div>",2445:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2445\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> samplesPerSecond() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of samples per second.</div></div>",2446:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2446\" class=\"NDPrototype NoParameterForm\">RateType rateType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sample rate type</div></div>",2447:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2447\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> samples() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of samples for the sample rate (or seconds if less than 1 Hz)</div></div>",2448:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2448\" class=\"NDPrototype NoParameterForm\">WirelessTypes::WirelessSampleRate toWirelessSampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::WirelessSampleRate enum for the current SampleRate.</div></div>",2449:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2449\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate Hertz(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">samplesPerSecond</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the given samples per second</div></div>",2450:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2450\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate KiloHertz(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">kSamplesPerSecond</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the given 1000 samples per second</div></div>",2451:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2451\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate Seconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">secondsBetweenSamples</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the given seconds between samples</div></div>",2452:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Creates a SampleRate object with the asynchronous/event type.</div></div>",2453:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2453\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate FromWirelessEepromValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">WirelessSampleRate&nbsp;</td><td class=\"PName last\">eepromValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the WirelessTypes::WirelessSampleRate value (the value that gets stored in eeprom).</div></div>",2454:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a vector of SampleRate objects.</div></div>"});