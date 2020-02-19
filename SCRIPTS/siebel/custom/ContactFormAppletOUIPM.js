if (typeof(SiebelAppFacade.ContactFormAppletOUIPM) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.ContactFormAppletOUIPM");
    define("siebel/custom/ContactFormAppletOUIPM", ["siebel/pmodel"], function()
    {
        SiebelAppFacade.ContactFormAppletOUIPM = (function()
        {

            function ContactFormAppletOUIPM(pm)
            {
                SiebelAppFacade.ContactFormAppletOUIPM.superclass.constructor.apply(this, arguments);
				
            }

            SiebelJS.Extend(ContactFormAppletOUIPM, SiebelAppFacade.PresentationModel);

            ContactFormAppletOUIPM.prototype.Init = function()
            {
                SiebelAppFacade.ContactFormAppletOUIPM.superclass.Init.apply(this, arguments);
				this.AddProperty("AmntColor","black");
				this.AddProperty("PercentColor","black");
				this.AddProperty("ShowSelectionEvent","N");
				this.AddMethod("FieldChange", this.OnFieldChange, {sequence: false, scope: this});
				this.AddMethod("ShowSelection", this.OnSelectionChange, {sequence: false, scope: this});
            }

			ContactFormAppletOUIPM.prototype.OnFieldChange = function(control, value)
			{
				if (control.GetFieldName() == "FINCORP Account Curr Ball Calc"){
					if (parseInt(value.replace(' ', "")) > 100000){
						this.SetProperty("AmntColor", "red" );
					}
					else if (parseInt(value.replace(' ', "")) < 100000 && parseInt(value.replace(' ', "")) > 0)
					{
				        this.SetProperty("AmntColor", "green" );
					}
					else 
					{
						this.SetProperty("AmntColor", "black" );
					}
				}
				
				if (control.GetFieldName() == "PTP Amnt Summ Percent View"){
					
					if (parseInt(value.replace('%','')) < 30 && parseInt(value.replace('%','')) > 0){
						this.SetProperty("PercentColor", "red" );
					}
					else if (parseInt(value.replace('%','')) < 70 && parseInt(value.replace('%','')) > 30)
					{
				        this.SetProperty("PercentColor", "orange" );
					}
					else if (parseInt(value.replace('%','')) > 70)
					{
				        this.SetProperty("PercentColor", "green" );
					}
					else 
					{
						this.SetProperty("PercentColor", "black" );
					}
				}
				
			}
			
			ContactFormAppletOUIPM.prototype.OnSelectionChange = function()
			{
				let  valueCurBall=this.Get("GetBusComp").GetFieldValue("FINCORP Account Curr Ball Calc");

					if (parseInt(valueCurBall.replace(' ', "")) > 100000){
						this.SetProperty("AmntColor", "red" );
					}
					else if (parseInt(valueCurBall.replace(' ', "")) < 100000 && parseInt(valueCurBall.replace(' ', "")) > 0)
					{
				        this.SetProperty("AmntColor", "green" );
					}
					else 
					{
						this.SetProperty("AmntColor", "black" );
					}
				console.log("showselection");
				
				let  valuePTP=this.Get("GetBusComp").GetFieldValue("PTP Amnt Summ Percent View");
				
					
					if (parseInt(valuePTP.replace('%','')) < 30 && parseInt(valuePTP.replace('%','')) > 0){
						this.SetProperty("PercentColor", "red" );
					}
					else if (parseInt(valuePTP.replace('%','')) < 70 && parseInt(valuePTP.replace('%','')) > 30)
					{
				        this.SetProperty("PercentColor", "orange" );
					}
					else if (parseInt(valuePTP.replace('%','')) > 70)
					{
				        this.SetProperty("PercentColor", "green" );
					}
					else 
					{
						this.SetProperty("PercentColor", "black" );
					}
				
				this.SetProperty("ShowSelectionEvent", "Y" );
			}


            ContactFormAppletOUIPM.prototype.Setup = function(propSet)
            {
                SiebelAppFacade.ContactFormAppletOUIPM.superclass.Setup.apply(this, arguments);
            }

            return ContactFormAppletOUIPM;
        }());
        return "SiebelAppFacade.ContactFormAppletOUIPM";
    })
}