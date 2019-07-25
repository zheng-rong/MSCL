//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 3.0.6
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class WirelessChannel : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal WirelessChannel(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(WirelessChannel obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~WirelessChannel() {
    Dispose();
  }

  public virtual void Dispose() {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_WirelessChannel(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      global::System.GC.SuppressFinalize(this);
    }
  }

  public WirelessChannel() : this(msclPINVOKE.new_WirelessChannel__SWIG_0(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public WirelessChannel(byte chNumber, WirelessChannel.ChannelId id, WirelessTypes.ChannelType type, string description) : this(msclPINVOKE.new_WirelessChannel__SWIG_1(chNumber, (int)id, (int)type, description), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public WirelessChannel(byte chNumber, WirelessChannel.ChannelId id, WirelessTypes.ChannelType type, string description, byte adcResolution) : this(msclPINVOKE.new_WirelessChannel__SWIG_2(chNumber, (int)id, (int)type, description, adcResolution), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public byte channelNumber() {
    byte ret = msclPINVOKE.WirelessChannel_channelNumber(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public WirelessChannel.ChannelId id() {
    WirelessChannel.ChannelId ret = (WirelessChannel.ChannelId)msclPINVOKE.WirelessChannel_id(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public WirelessTypes.ChannelType type() {
    WirelessTypes.ChannelType ret = (WirelessTypes.ChannelType)msclPINVOKE.WirelessChannel_type(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public string description() {
    string ret = msclPINVOKE.WirelessChannel_description(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public byte adcResolution() {
    byte ret = msclPINVOKE.WirelessChannel_adcResolution(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public uint adcMaxValue() {
    uint ret = msclPINVOKE.WirelessChannel_adcMaxValue(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public string name() {
    string ret = msclPINVOKE.WirelessChannel_name(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public enum ChannelId {
    channel_unknown = 0,
    channel_1 = 1,
    channel_2 = 2,
    channel_3 = 3,
    channel_4 = 4,
    channel_5 = 5,
    channel_6 = 6,
    channel_7 = 7,
    channel_8 = 8,
    channel_9 = 9,
    channel_10 = 10,
    channel_11 = 11,
    channel_12 = 12,
    channel_13 = 13,
    channel_14 = 14,
    channel_15 = 15,
    channel_16 = 16,
    channel_digital_1 = 17,
    channel_digital_2 = 18,
    channel_digital_3 = 19,
    channel_digital_4 = 20,
    channel_digital_5 = 21,
    channel_digital_6 = 22,
    channel_digital_7 = 23,
    channel_digital_8 = 24,
    channel_digital_9 = 25,
    channel_digital_10 = 26,
    channel_digital_11 = 27,
    channel_digital_12 = 28,
    channel_digital_13 = 29,
    channel_digital_14 = 30,
    channel_digital_15 = 31,
    channel_digital_16 = 32,
    channel_structuralHealth = 33,
    channel_hcl_rawBase_mag1_x = 34,
    channel_hcl_rawBase_mag1_y = 35,
    channel_hcl_rawBase_mag1_z = 36,
    channel_hcl_rawBase_mag2_x = 37,
    channel_hcl_rawBase_mag2_y = 38,
    channel_hcl_rawBase_mag2_z = 39,
    channel_hcl_rawBase_mag3_x = 40,
    channel_hcl_rawBase_mag3_y = 41,
    channel_hcl_rawBase_mag3_z = 42,
    channel_hcl_rawBase_mag4_x = 43,
    channel_hcl_rawBase_mag4_y = 44,
    channel_hcl_rawBase_mag4_z = 45,
    channel_hcl_rawBase_mag5_x = 46,
    channel_hcl_rawBase_mag5_y = 47,
    channel_hcl_rawBase_mag5_z = 48,
    channel_hcl_rawBase_mag6_x = 49,
    channel_hcl_rawBase_mag6_y = 50,
    channel_hcl_rawBase_mag6_z = 51,
    channel_hcl_rawBase_mag7_x = 52,
    channel_hcl_rawBase_mag7_y = 53,
    channel_hcl_rawBase_mag7_z = 54,
    channel_hcl_rawBase_mag8_x = 55,
    channel_hcl_rawBase_mag8_y = 56,
    channel_hcl_rawBase_mag8_z = 57,
    channel_hcl_rawBase_gyro_x = 58,
    channel_hcl_rawBase_gyro_y = 59,
    channel_hcl_rawBase_gyro_z = 60,
    channel_error_code = 61,
    channel_hcl_rawStrain_BL30 = 62,
    channel_hcl_rawStrain_BL120 = 63,
    channel_hcl_rawStrain_A60 = 64,
    channel_hcl_rawStrain_A150 = 65,
    channel_hcl_rawStrain_AL30 = 66,
    channel_hcl_rawStrain_AL120 = 67,
    channel_hcl_rawStrain_BR60 = 68,
    channel_hcl_rawStrain_BR150 = 69,
    channel_hcl_rawStrain_B30 = 70,
    channel_hcl_rawStrain_T120 = 71,
    channel_hcl_rawStrain_AR60 = 72,
    channel_hcl_rawStrain_AR150 = 73,
    channel_hcl_rawStrain_A30 = 74,
    channel_hcl_rawStrain_A120 = 75,
    channel_hcl_rawStrain_BL90 = 76,
    channel_hcl_rawStrain_BL180 = 77,
    channel_hcl_rawStrain_BR30 = 78,
    channel_hcl_rawStrain_BR120 = 79,
    channel_hcl_rawStrain_AL90 = 80,
    channel_hcl_rawStrain_AL180 = 81,
    channel_hcl_rawStrain_AR30 = 82,
    channel_hcl_rawStrain_AR120 = 83,
    channel_hcl_rawStrain_B90 = 84,
    channel_hcl_rawStrain_T0 = 85,
    channel_hcl_rawStrain_BL60 = 86,
    channel_hcl_rawStrain_BL150 = 87,
    channel_hcl_rawStrain_A90 = 88,
    channel_hcl_rawStrain_A0 = 89,
    channel_hcl_rawStrain_AL60 = 90,
    channel_hcl_rawStrain_AL150 = 91,
    channel_hcl_rawStrain_BR90 = 92,
    channel_hcl_rawStrain_BR0 = 93,
    channel_hcl_rawStrain_T60 = 94,
    channel_hcl_rawStrain_B150 = 95,
    channel_hcl_rawStrain_AR90 = 96,
    channel_hcl_rawStrain_AR0 = 97,
    channel_hcl_rawInertial_accel1 = 98,
    channel_hcl_rawInertial_accel2 = 99,
    channel_hcl_rawInertial_accel3 = 100,
    channel_hcl_rawInertial_accel4 = 101,
    channel_hcl_rawInertial_accel5 = 102,
    channel_hcl_rawInertial_accel6 = 103,
    channel_hcl_rawInertial_accel7 = 104,
    channel_hcl_rawInertial_accel8 = 105,
    channel_hcl_rawInertial_gyroX = 106,
    channel_hcl_rawInertial_gyroY = 107,
    channel_hcl_rawInertial_gyroZ = 108,
    channel_rawAngleStrain = 109,
    channel_beaconEcho = 110,
    channel_rfSweep = 111,
    channel_diag_state = 112,
    channel_diag_runtime_idle = 113,
    channel_diag_runtime_sleep = 114,
    channel_diag_runtime_activeRun = 115,
    channel_diag_runtime_inactiveRun = 116,
    channel_diag_resetCounter = 117,
    channel_diag_lowBatteryFlag = 118,
    channel_diag_sweepIndex = 119,
    channel_diag_badSweepCount = 120,
    channel_diag_totalTx = 121,
    channel_diag_totalReTx = 122,
    channel_diag_totalDroppedPackets = 123,
    channel_diag_builtInTestResult = 124,
    channel_diag_eventIndex = 125,
    channel_hcl_axialLoadX = 126,
    channel_hcl_axialLoadY = 127,
    channel_hcl_axialLoadZ = 128,
    channel_hcl_bendingMomentFlap = 129,
    channel_hcl_bendingMomentLag = 130,
    channel_hcl_bendingMomentPitch = 131,
    channel_hcl_motionFlap_mag = 132,
    channel_hcl_motionLag_mag = 133,
    channel_hcl_motionPitch_mag = 134,
    channel_hcl_motionFlap_inertial = 135,
    channel_hcl_motionLag_inertial = 136,
    channel_hcl_motionPitch_inertial = 137,
    channel_hcl_cockingStiffness_mag = 138,
    channel_hcl_cockingStiffness_inertial = 139,
    channel_hcl_temperature = 140,
    channel_diag_externalPower = 141,
    channel_diag_internalTemp = 142,
    channel_1_rms = 143,
    channel_2_rms = 144,
    channel_3_rms = 145,
    channel_4_rms = 146,
    channel_5_rms = 147,
    channel_6_rms = 148,
    channel_7_rms = 149,
    channel_8_rms = 150,
    channel_9_rms = 151,
    channel_10_rms = 152,
    channel_11_rms = 153,
    channel_12_rms = 154,
    channel_13_rms = 155,
    channel_14_rms = 156,
    channel_15_rms = 157,
    channel_16_rms = 158,
    channel_1_peakToPeak = 159,
    channel_2_peakToPeak = 160,
    channel_3_peakToPeak = 161,
    channel_4_peakToPeak = 162,
    channel_5_peakToPeak = 163,
    channel_6_peakToPeak = 164,
    channel_7_peakToPeak = 165,
    channel_8_peakToPeak = 166,
    channel_9_peakToPeak = 167,
    channel_10_peakToPeak = 168,
    channel_11_peakToPeak = 169,
    channel_12_peakToPeak = 170,
    channel_13_peakToPeak = 171,
    channel_14_peakToPeak = 172,
    channel_15_peakToPeak = 173,
    channel_16_peakToPeak = 174,
    channel_1_ips = 175,
    channel_2_ips = 176,
    channel_3_ips = 177,
    channel_4_ips = 178,
    channel_5_ips = 179,
    channel_6_ips = 180,
    channel_7_ips = 181,
    channel_8_ips = 182,
    channel_9_ips = 183,
    channel_10_ips = 184,
    channel_11_ips = 185,
    channel_12_ips = 186,
    channel_13_ips = 187,
    channel_14_ips = 188,
    channel_15_ips = 189,
    channel_16_ips = 190,
    channel_1_crestFactor = 191,
    channel_2_crestFactor = 192,
    channel_3_crestFactor = 193,
    channel_4_crestFactor = 194,
    channel_5_crestFactor = 195,
    channel_6_crestFactor = 196,
    channel_7_crestFactor = 197,
    channel_8_crestFactor = 198,
    channel_9_crestFactor = 199,
    channel_10_crestFactor = 200,
    channel_11_crestFactor = 201,
    channel_12_crestFactor = 202,
    channel_13_crestFactor = 203,
    channel_14_crestFactor = 204,
    channel_15_crestFactor = 205,
    channel_16_crestFactor = 206,
    channel_diag_syncAttempts = 207,
    channel_diag_syncFailures = 208,
    channel_diag_secsSinceLastSync = 209,
    channel_beaconConflict = 210,
    channel_1_mean = 211,
    channel_2_mean = 212,
    channel_3_mean = 213,
    channel_4_mean = 214,
    channel_5_mean = 215,
    channel_6_mean = 216,
    channel_7_mean = 217,
    channel_8_mean = 218,
    channel_9_mean = 219,
    channel_10_mean = 220,
    channel_11_mean = 221,
    channel_12_mean = 222,
    channel_13_mean = 223,
    channel_14_mean = 224,
    channel_15_mean = 225,
    channel_16_mean = 226,
    channel_1_mmps = 227,
    channel_2_mmps = 228,
    channel_3_mmps = 229,
    channel_4_mmps = 230,
    channel_5_mmps = 231,
    channel_6_mmps = 232,
    channel_7_mmps = 233,
    channel_8_mmps = 234,
    channel_9_mmps = 235,
    channel_10_mmps = 236,
    channel_11_mmps = 237,
    channel_12_mmps = 238,
    channel_13_mmps = 239,
    channel_14_mmps = 240,
    channel_15_mmps = 241,
    channel_16_mmps = 242,
    channel_diag_memoryFull = 243
  }

}

}