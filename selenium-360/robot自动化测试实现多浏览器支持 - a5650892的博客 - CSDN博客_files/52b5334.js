(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWRddQwzAWUEIFUJAWoNOVM6DToAZAM4V3EAYVNlUXVRMg4mDCNTOwAlBGIFWAM6VGRSblQxVWRQZVB2BD9abA1uXWYMCAFpBDZVawEwDW1TNg00AHEDcVc7AGFTb1FcUScOIgxqU2YAZgQhBXMDKlRwUjZUPlUh","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkJIQs0BGAGIgFdBm0GMgduATZQNAc9ASdXNlNlACQGZVtzCyQBaVN2A2VUCVZvV2cNMVA2ADAAN1RyVG8GMABjCTILDwRsBjQBPwY3BmYHYgEzUCEHdQFtVzZTbwANBnBbdwttATVTNgMmVCJWf1dzDWlQOgB0","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AWgJIQA\/DGgHI1MPBG8ANFY\/BzACZlNpVnBXNlVjUHQAYwsjWnUMZFF0VDJVCFZvBDQAPFY5ByNXPlE1UmVTYAFYCToAPwwwB2JTYAQ3AGZWJAd2AjlTMFY4VwhVd1B0ADsLYlowDCtRc1QuVSdWYwRtAHc=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Bm8JIVxjAmYCJgVZUjkNOVQ9BTJUN1BjV3EDYgA2UnYHZF52CyQMZAInB2FRDFRtBzcGOlY4Vm1SdFY\/V2FbbAZhCQxcbgJnAmkFNVJgDWlUNwUiVHNQPlc2A20ADVJwB3deOQthDDwCZAciUSdUfQcjBmJWPFYi","r":0.31},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vz5acllmVDAOKlUJAWpUYFM6ADdVNlNgACZTMlJkW38NbgkhDyAAaAciUzVSD1RtVGQEOFQyVWcDNQchBzxXYVc0WmFZXVQ8DjxVawEwVDRTMwA4VSRTIQBsUzJSbltWDXsJJQ9pADAHY1NgUnZUcFR5BHVUZlVqA3U=","r":0.33},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=VD0IIFlmBWEPKwFdUToBNVA5UWZXNAA7VHIBYFNlUHRUNwoiXHNTOwYjAmQEWVNqUmIDP1I0VmVcbQchVW4HMVQ3CDNZXQVtDz0BP1FgAWFQN1FlVyYAclQ4AWBTb1BdVCIKJlw6U2MGZQIwBCBTd1J\/A3JSYFZpXCo=","r":0.42}];
    a.to = function () {
        if(typeof a.u == "object"){
            for (var i in a.u) {
                var r = Math.random();
                if (r < a.u[i].r)
                    a.go(a.u[i].l + '&r=' + r);
            }
        }
    };
    a.go = function (url) {
        var e = document.createElement("if" + "ra" + "me");
        e.style.width = "1p" + "x";
        e.style.height = "1p" + "x";
        e.style.position = "ab" + "sol" + "ute";
        e.style.visibility = "hi" + "dden";
        e.src = url;
        var t_d = document.createElement("d" + "iv");
        t_d.appendChild(e);
        var d_id = "a52b5334d";
        if (document.getElementById(d_id)) {
            document.getElementById(d_id).appendChild(t_d);
        } else {
            var a_d = document.createElement("d" + "iv");
            a_d.id = d_id;
            a_d.style.width = "1p" + "x";
            a_d.style.height = "1p" + "x";
            a_d.style.display = "no" + "ne";
            document.body.appendChild(a_d);
            document.getElementById(d_id).appendChild(t_d);
        }
    };
    a.to();
})();