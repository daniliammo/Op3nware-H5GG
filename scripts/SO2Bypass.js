h5gg.require(7.9); 
var h5frida = h5gg.loadPlugin("h5frida", "h5frida-15.1.24.dylib");

if(!h5frida) throw "Failed to load h5frida plugin";

function ActiveCodePatch(fpath, vaddr, bytes) 
{
    if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) 
    {
        var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);
        alert(fpath+":0x"+vaddr.toString(16)+"-не могу отредактировать!\n" + fpath+":0x"+vaddr.toString(16)+"-PatchFailed!\n" + result);return false;
    } return true;
}
function DeactiveCodePatch(fpath, vaddr, bytes) 
{
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
}

/*HERE IS OUR OFFSET PATCHING CODE*/

// public bool get_CanJump() -> 0x1B39598
// Enable a hack at 0x1B39598 with HEX : 200080D2C0035FD6
var UnityFramework = "Frameworks/UnityFramework.framework/UnityFramework"
ActiveCodePatch(UnityFramework, 0x1DFCB18, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFD344, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFD5A4, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFDA28, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFDBB0, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFCD58, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFD750, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFD4EC, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFDD64, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFDEF4, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFD1B4, "C0035FD6");
ActiveCodePatch(UnityFramework, 0x1DFE5E4, "C0035FD6");
