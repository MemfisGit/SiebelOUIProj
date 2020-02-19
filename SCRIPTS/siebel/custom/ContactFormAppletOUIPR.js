if (typeof(SiebelAppFacade.ContactFormAppletOUIPR) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.ContactFormAppletOUIPR");
    define("siebel/custom/ContactFormAppletOUIPR", ["siebel/phyrenderer"], function()
    {
        SiebelAppFacade.ContactFormAppletOUIPR = (function()
        {

            function ContactFormAppletOUIPR(pm)
            {
                SiebelAppFacade.ContactFormAppletOUIPR.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(ContactFormAppletOUIPR, SiebelAppFacade.PhysicalRenderer);

            ContactFormAppletOUIPR.prototype.Init = function()
            {
                SiebelAppFacade.ContactFormAppletOUIPR.superclass.Init.apply(this, arguments);
				this.AttachPMBinding("AmntColor", this.ShowAmntColor);
				this.AttachPMBinding("PercentColor", this.ShowPercentColor);
				this.AttachPMBinding("ShowSelectionEvent", this.ShowSelectionHandler);
				console.log("Init");
            }
			
			ContactFormAppletOUIPR.prototype.ShowSelectionHandler = function(){
				
				let PM = this.GetPM();
			 
				if (PM.Get("ShowSelectionEvent") == "Y"){
				
					let PM = this.GetPM();
					
					var Applet = PM.Get("GetFullId");
					var SelApp = $("#"+Applet);
					
					SelApp.find(".siebui-row-counter").css({'color':'#ffffff'});
					
					
					SelApp.find(".siebui-appletmenu-btn").css({"background":"url(../IMAGES/custom/MenuBtn.png)","background-size": "contain", "width": "27px", "height": "25px", "border": "none"});
					SelApp.find(".siebui-appletmenu-btn").find("span").remove();
					SelApp.find(".siebui-appletmenu-btn").removeClass();
					
					SelApp.find("#HTML_Label_Label").parent().parent().attr('valign','top');
					
					for (let i = 3; i < 18; i++){
						SelApp.find("#HTML_Label"+i+"_Label").attr('class','greycontrol');
					}
			
				}
			
			}
			
			
			
			ContactFormAppletOUIPR.prototype.ShowAmntColor = function(){
			 
				

				let PM = this.GetPM();
                let controls = PM.Get("GetControls");
                let FINCORPAccCurrBall = controls["FINCORP Account Curr Ball Calc"].GetInputName();
                $("[name='" + FINCORPAccCurrBall + "']").css({'color':PM.Get("AmntColor")});
			
			}
			
			ContactFormAppletOUIPR.prototype.ShowPercentColor = function(){
			 
				
				let PM = this.GetPM();
                let controls = PM.Get("GetControls");
                let PTPSummPercent = controls["PTP Amnt Percent Calc"].GetInputName();
                $("[name='" + PTPSummPercent + "']").css({'color':PM.Get("PercentColor")});
				
			}


            ContactFormAppletOUIPR.prototype.ShowUI = function()
            {
                SiebelAppFacade.ContactFormAppletOUIPR.superclass.ShowUI.apply(this, arguments);
								
				console.log("ShowUI");
				
            }

            ContactFormAppletOUIPR.prototype.BindData = function(bRefresh)
            {
                SiebelAppFacade.ContactFormAppletOUIPR.superclass.BindData.apply(this, arguments);
				

				
				this.PrepeareAppletUI();
				
				console.log("Bind data");
				
            }
			
			ContactFormAppletOUIPR.prototype.PrepeareAppletUI = function(){
			 
				
				let PM = this.GetPM();
                let controls = PM.Get("GetControls");
								
				let PTPAmntPercent = controls["PTP Amnt Percent Calc"];
				let PTPAmntPercentVal = PM.ExecuteMethod("GetFieldValue", PTPAmntPercent);


                let FINAccBall = controls["FINCORP Account Curr Ball Calc"];
				let FINAccBallVal = PM.ExecuteMethod("GetFieldValue", FINAccBall);
				
				let LastName = controls["LastName"];
				let CalcIO = controls["Calc IO"];
				let Photo = controls["PhotoImage"];
				
				$("[name='" + PTPAmntPercent.GetInputName() + "']").css({'fontSize':'23px', 'font-weight':'bold'});
				$("[name='" + FINAccBall.GetInputName() + "']").css({'fontSize':'23px', 'font-weight':'bold'});
				$("[name='" + LastName.GetInputName() + "']").css({'fontSize':'23px', 'font-weight':'bold'});
				$("[name='" + CalcIO.GetInputName() + "']").css({'fontSize':'23px', 'font-weight':'bold'});
				$("[name='" + Photo.GetInputName() + "']").after("<img src='images/custom/Photo.png' /></img>");
				
				$("[name='" + PTPAmntPercent.GetInputName() + "']").html($("[name='" + PTPAmntPercent.GetInputName() + "']").html().replace('&nbsp;',''))
				$("[name='" + FINAccBall.GetInputName() + "']").html($("[name='" + FINAccBall.GetInputName() + "']").html().replace('&nbsp;',''))
				$("[name='" + LastName.GetInputName() + "']").html($("[name='" + LastName.GetInputName() + "']").html().replace('&nbsp;',''))
				$("[name='" + CalcIO.GetInputName() + "']").html($("[name='" + CalcIO.GetInputName() + "']").html().replace('&nbsp;',''))
				
						
			}

            ContactFormAppletOUIPR.prototype.BindEvents = function()
            {
                SiebelAppFacade.ContactFormAppletOUIPR.superclass.BindEvents.apply(this, arguments);
				console.log("BindEvents");
            }

            ContactFormAppletOUIPR.prototype.EndLife = function()
            {
                SiebelAppFacade.ContactFormAppletOUIPR.superclass.EndLife.apply(this, arguments);
		
            }

            return ContactFormAppletOUIPR;
        }());
        return "SiebelAppFacade.ContactFormAppletOUIPR";
    })
}