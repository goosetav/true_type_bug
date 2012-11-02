require 'spec_helper'

# NOTE: This is not a real spec.
# ... used to sanity check CI

describe "poltergeist", :js => true do

  let(:image) {
    File.join(Rails.root, 'tmp', "poltergeist-#{Time.now.to_i}.png")
  }

  it "takes pretty screenshots with phantomjs" do
    visit root_path
    page.driver.render image, :full => true
    #Launchy.open image
  end

  it "works a second time too" do
    visit root_path
    page.driver.render image, :full => true

    puts "I won't reach here because I died"
  end

end
