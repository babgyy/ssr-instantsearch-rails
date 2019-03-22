class WelcomeController < ApplicationController
  def index
    # REF3
    @result = Post.search("dolorem").raw_answer.to_json
  end
end
