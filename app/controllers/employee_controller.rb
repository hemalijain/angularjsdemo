class EmployeeController < ApplicationController


	def angular
    respond_to do |format|
      format.html # new.html.erb
      format.xml  {  }
    end
	end

	def display
	   @results = Employee.all
	   render :json => @results.to_json
	end


	def add
       @employee = Employee.new(:employee_name=>"#{params[:name]}",:employee_id=>"#{params[:emp_id]}",:experience=>"#{params[:exp]}")
       @employee.save!
render :js => "alert('hji')"

end
end
